//
// This file was generated by the Eclipse Implementation of JAXB, v3.0.0 
// See https://eclipse-ee4j.github.io/jaxb-ri 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2022.10.22 at 12:13:40 PM CEST 
//


package com.sportradar.sdk.proto.dto.incoming.livescout;

import java.util.ArrayList;
import java.util.List;
import com.sportradar.sdk.proto.dto.IncomingMessage;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlAttribute;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element ref="{}player" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element ref="{}manager" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element ref="{}teamofficial" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *       &lt;attribute name="matchid" use="required"&gt;
 *         &lt;simpleType&gt;
 *           &lt;restriction base="{http://www.w3.org/2001/XMLSchema}long"&gt;
 *           &lt;/restriction&gt;
 *         &lt;/simpleType&gt;
 *       &lt;/attribute&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "player",
    "manager",
    "teamofficial"
})
@XmlRootElement(name = "lineups")
public class Lineups
    extends IncomingMessage
{

    protected List<Player> player;
    protected List<Manager> manager;
    protected List<Teamofficial> teamofficial;
    @XmlAttribute(name = "matchid", required = true)
    protected long matchid;

    /**
     * Gets the value of the player property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the Jakarta XML Binding object.
     * This is why there is not a <CODE>set</CODE> method for the player property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPlayer().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Player }
     * 
     * 
     */
    public List<Player> getPlayer() {
        if (player == null) {
            player = new ArrayList<Player>();
        }
        return this.player;
    }

    /**
     * Gets the value of the manager property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the Jakarta XML Binding object.
     * This is why there is not a <CODE>set</CODE> method for the manager property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getManager().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Manager }
     * 
     * 
     */
    public List<Manager> getManager() {
        if (manager == null) {
            manager = new ArrayList<Manager>();
        }
        return this.manager;
    }

    /**
     * Gets the value of the teamofficial property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the Jakarta XML Binding object.
     * This is why there is not a <CODE>set</CODE> method for the teamofficial property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getTeamofficial().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Teamofficial }
     * 
     * 
     */
    public List<Teamofficial> getTeamofficial() {
        if (teamofficial == null) {
            teamofficial = new ArrayList<Teamofficial>();
        }
        return this.teamofficial;
    }

    /**
     * Gets the value of the matchid property.
     * 
     */
    public long getMatchid() {
        return matchid;
    }

    /**
     * Sets the value of the matchid property.
     * 
     */
    public void setMatchid(long value) {
        this.matchid = value;
    }

}
