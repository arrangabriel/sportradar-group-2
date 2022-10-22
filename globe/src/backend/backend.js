getEventsSync((e) => { console.log(e) })

function getEventsSync(callback) {
    getEventsAsync().then((result) => callback(result));
}

async function getEventsAsync() {
    let response = await fetch("https://dev.fn.sportradar.com/common/en/Europe:Oslo/gismo/event_get");
    let data = await response.json();

    results = {}

    for (matchEvent of data.doc[0].data) {
        eventType = getEventType(matchEvent.name)
        if (results[matchEvent.matchid] == undefined) {
            let location = await getMatchLocation(matchEvent.matchid);
            results[matchEvent.matchid] = {
                "sport": getSportTypes(matchEvent._sid),
                "events": [
                    eventType
                ],
                "location": location
            }
        } else {
            results[matchEvent.matchid].events.push(eventType)
        }
    }

    results_filtered = {}

    for (key of Object.keys(results)) {
        let match = results[key]
        if (!(match.location.coordinates == null && match.location.location == null)) {
            results_filtered[key] = match
        }
    }
    return results_filtered
}

function getSportTypes(id) {
    return sports[id];
}

function getEventType(event) {
    for (type of eventTypes) {
        if (type[1].includes(event)) {
            return type[0]
        }
    }
    return "generic"
}

async function getMatchLocation(matchid) {
    let response = await fetch(
        "https://dev.fn.sportradar.com/common/en/Europe:Berlin/gismo/match_coordinates/" + matchid
    );
    response = await response.json();
    response = response.doc[0].data
    return response
}

eventTypes = [
    ["goal", [
        "Goal",
        '1 pt scored',
        '2 pt scored',
        'Score change',
        "Score change tennis - full score"
    ]],
    ["in-play", [
        "Started",
        "Ball in play",
        "First server"
    ]],
    ["time", [
        '1st set', '2nd set', '3rd set',
        '4th set', '5th set', '2nd period',
        '2nd half', 'Time start/stop',
        "Full Time", "Match end"
    ]],
    ["refree", [
        "First serve fault",
        "Possible corner",
        'Possible yellow card',
        'Possible red card'
    ]]
]

sports = {
    "1": "soccer",
    "2": "basketball",
    "3": "baseball",
    "4": "ice hockey",
    "5": "tennis",
    "6": "handball",
    "7": "floorball",
    "8": "trotting",
    "9": "golf",
    "10": "boxing",
    "11": "motor sport",
    "12": "rugby",
    "13": "aussie rules",
    "14": "winter sports",
    "15": "bandy",
    "16": "football",
    "17": "cycling",
    "18": "specials",
    "19": "snooker",
    "20": "table tennis",
    "21": "cricket",
    "22": "darts",
    "23": "volleyball",
    "24": "field hockey",
    "25": "pool",
    "26": "waterpolo",
    "27": "gaelic sports",
    "28": "curling",
    "29": "futsal",
    "30": "olympics",
    "31": "badminton",
    "32": "bowls",
    "33": "chess",
    "34": "beach volley",
    "35": "netball",
    "36": "athletics",
    "37": "squash",
    "38": "rink hockey",
    "39": "lacrosse",
    "40": "formula 1",
    "41": "bikes",
    "42": "dtm",
    "43": "alpine skiing",
    "44": "biathlon",
    "45": "bobsleigh",
    "46": "cross-country",
    "47": "nordic combined",
    "48": "ski jumping",
    "49": "snowboard",
    "50": "speed skating",
    "51": "luge",
    "52": "swimming",
    "53": "finnish baseball",
    "54": "softball",
    "55": "horse racing",
    "56": "schwingen",
    "57": "inline hockey",
    "58": "greyhound",
    "59": "rugby league",
    "60": "beach soccer",
    "61": "pesapallo",
    "62": "streethockey",
    "63": "world championship",
    "64": "rowing",
    "65": "snowboard afu",
    "66": "snowboard asp",
    "67": "motogp",
    "68": "moto2",
    "69": "moto3",
    "70": "nascar cup series",
    "71": "padel",
    "72": "canoeing",
    "73": "horseball",
    "74": "aquatics",
    "75": "archery",
    "76": "equestrian",
    "77": "fencing",
    "78": "gymnastics",
    "79": "judo",
    "80": "modern pentathlon",
    "81": "sailing",
    "82": "shooting",
    "83": "taekwondo",
    "84": "triathlon",
    "85": "weightlifting",
    "86": "wrestling",
    "87": "olympics youth",
    "88": "cycling mountain bike",
    "89": "riding",
    "90": "surfing",
    "91": "cycling bmx",
    "92": "canoe slalom",
    "93": "rhythmic gymnastics",
    "94": "trampoline gymnastics",
    "95": "artistic swimming",
    "96": "diving",
    "97": "cycling track",
    "98": "beach tennis",
    "99": "sumo",
    "100": "superbike",
    "101": "rally",
    "102": "figure skating",
    "103": "freestyle skiing",
    "104": "skeleton",
    "105": "short track speed skating",
    "106": "soccer mythical",
    "107": "e-sport",
    "108": "world lottery",
    "109": "esport counter-strike",
    "110": "esport league of legends",
    "111": "esport dota",
    "112": "esport starcraft",
    "113": "esport hearthstone",
    "114": "esport heroes of the storm",
    "115": "esport world of tanks",
    "116": "polo",
    "117": "mma",
    "118": "esport call of duty",
    "119": "esport smite",
    "120": "esport vainglory",
    "121": "esport overwatch",
    "122": "esport warcraft iii",
    "123": "esport crossfire",
    "124": "esport halo",
    "125": "esport rainbow six",
    "126": "sepak takraw",
    "127": "esport street fighter v",
    "128": "esport rocket league",
    "129": "indy racing",
    "130": "basque pelota",
    "131": "speedway",
    "132": "esport gears of war",
    "133": "esport clash royale",
    "134": "esport king of glory",
    "135": "gaelic football",
    "136": "gaelic hurling",
    "137": "esoccer",
    "138": "kabaddi",
    "139": "esport quake",
    "140": "esport playerunknowns battlegrounds",
    "141": "cycling cycle ball",
    "142": "formula e",
    "143": "7ballrun",
    "144": "motocross",
    "145": "sprint car racing",
    "146": "speed boat racing",
    "147": "drag racing",
    "148": "deprecated stock car racing",
    "149": "modified racing",
    "150": "off road",
    "151": "truck & tractor pulling",
    "152": "esport world of warcraft",
    "153": "ebasketball",
    "154": "esport dragon ball fighterz",
    "155": "basketball 3x3",
    "156": "esport tekken",
    "157": "beach handball",
    "158": "esport arena of valor",
    "159": "esport tf2",
    "160": "esport ssb",
    "161": "esport paladins",
    "162": "esport artifact",
    "163": "indoor soccer",
    "164": "esport apex legends",
    "165": "indy lights",
    "166": "esport pro evolution soccer",
    "167": "esport madden nfl",
    "168": "esport brawl stars",
    "169": "petanque",
    "170": "esport fortnite",
    "171": "esport card games",
    "172": "fishing",
    "173": "esport dota underlords",
    "174": "esport teamfight tactics",
    "175": "esport auto chess",
    "176": "esport fighting games",
    "177": "deprecated sc",
    "178": "esport motorsport",
    "179": "cycling bmx freestyle",
    "180": "cycling bmx racing",
    "181": "karate",
    "182": "marathon swimming",
    "183": "skateboarding",
    "184": "sport climbing",
    "185": "nascar camping world truck",
    "186": "nascar xfinity series",
    "187": "nhra",
    "188": "touring car racing",
    "189": "formula 2",
    "190": "motorcycle racing",
    "191": "stock car racing",
    "192": "air racing",
    "193": "endurance racing",
    "194": "esport valorant",
    "195": "eice hockey",
    "196": "etennis",
    "197": "ecricket",
    "198": "evolleyball",
    "199": "esport wild rift",
    "200": "t-basket"
}