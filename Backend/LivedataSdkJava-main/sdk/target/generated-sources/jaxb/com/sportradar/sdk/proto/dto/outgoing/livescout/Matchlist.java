//
// This file was generated by the Eclipse Implementation of JAXB, v3.0.0 
// See https://eclipse-ee4j.github.io/jaxb-ri 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2022.10.22 at 12:13:40 PM CEST 
//


package com.sportradar.sdk.proto.dto.outgoing.livescout;

import java.util.ArrayList;
import java.util.List;
import com.sportradar.sdk.proto.dto.OutgoingMessage;
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
 *         &lt;choice&gt;
 *           &lt;element name="sport" maxOccurs="unbounded" minOccurs="0"&gt;
 *             &lt;complexType&gt;
 *               &lt;complexContent&gt;
 *                 &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *                   &lt;attribute name="sportid" type="{http://www.w3.org/2001/XMLSchema}long" /&gt;
 *                 &lt;/restriction&gt;
 *               &lt;/complexContent&gt;
 *             &lt;/complexType&gt;
 *           &lt;/element&gt;
 *           &lt;element name="match" maxOccurs="unbounded" minOccurs="0"&gt;
 *             &lt;complexType&gt;
 *               &lt;complexContent&gt;
 *                 &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *                   &lt;attribute name="matchid" type="{http://www.w3.org/2001/XMLSchema}long" /&gt;
 *                 &lt;/restriction&gt;
 *               &lt;/complexContent&gt;
 *             &lt;/complexType&gt;
 *           &lt;/element&gt;
 *         &lt;/choice&gt;
 *       &lt;/sequence&gt;
 *       &lt;attribute name="hoursforward" use="required" type="{http://www.w3.org/2001/XMLSchema}int" /&gt;
 *       &lt;attribute name="hoursback" use="required" type="{http://www.w3.org/2001/XMLSchema}int" /&gt;
 *       &lt;attribute name="includeavailable"&gt;
 *         &lt;simpleType&gt;
 *           &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string"&gt;
 *             &lt;enumeration value="yes"/&gt;
 *             &lt;enumeration value="no"/&gt;
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
    "sport",
    "match"
})
@XmlRootElement(name = "matchlist")
public class Matchlist
    extends OutgoingMessage
{

    protected List<Matchlist.Sport> sport;
    protected List<Matchlist.Match> match;
    @XmlAttribute(name = "hoursforward", required = true)
    protected int hoursforward;
    @XmlAttribute(name = "hoursback", required = true)
    protected int hoursback;
    @XmlAttribute(name = "includeavailable")
    protected String includeavailable;

    /**
     * Gets the value of the sport property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the Jakarta XML Binding object.
     * This is why there is not a <CODE>set</CODE> method for the sport property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getSport().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Matchlist.Sport }
     * 
     * 
     */
    public List<Matchlist.Sport> getSport() {
        if (sport == null) {
            sport = new ArrayList<Matchlist.Sport>();
        }
        return this.sport;
    }

    /**
     * Gets the value of the match property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the Jakarta XML Binding object.
     * This is why there is not a <CODE>set</CODE> method for the match property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getMatch().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Matchlist.Match }
     * 
     * 
     */
    public List<Matchlist.Match> getMatch() {
        if (match == null) {
            match = new ArrayList<Matchlist.Match>();
        }
        return this.match;
    }

    /**
     * Gets the value of the hoursforward property.
     * 
     */
    public int getHoursforward() {
        return hoursforward;
    }

    /**
     * Sets the value of the hoursforward property.
     * 
     */
    public void setHoursforward(int value) {
        this.hoursforward = value;
    }

    /**
     * Gets the value of the hoursback property.
     * 
     */
    public int getHoursback() {
        return hoursback;
    }

    /**
     * Sets the value of the hoursback property.
     * 
     */
    public void setHoursback(int value) {
        this.hoursback = value;
    }

    /**
     * Gets the value of the includeavailable property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIncludeavailable() {
        return includeavailable;
    }

    /**
     * Sets the value of the includeavailable property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIncludeavailable(String value) {
        this.includeavailable = value;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType&gt;
     *   &lt;complexContent&gt;
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
     *       &lt;attribute name="matchid" type="{http://www.w3.org/2001/XMLSchema}long" /&gt;
     *     &lt;/restriction&gt;
     *   &lt;/complexContent&gt;
     * &lt;/complexType&gt;
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "")
    public static class Match
        extends OutgoingMessage
    {

        @XmlAttribute(name = "matchid")
        protected Long matchid;

        /**
         * Gets the value of the matchid property.
         * 
         * @return
         *     possible object is
         *     {@link Long }
         *     
         */
        public Long getMatchid() {
            return matchid;
        }

        /**
         * Sets the value of the matchid property.
         * 
         * @param value
         *     allowed object is
         *     {@link Long }
         *     
         */
        public void setMatchid(Long value) {
            this.matchid = value;
        }

    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType&gt;
     *   &lt;complexContent&gt;
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
     *       &lt;attribute name="sportid" type="{http://www.w3.org/2001/XMLSchema}long" /&gt;
     *     &lt;/restriction&gt;
     *   &lt;/complexContent&gt;
     * &lt;/complexType&gt;
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "")
    public static class Sport
        extends OutgoingMessage
    {

        @XmlAttribute(name = "sportid")
        protected Long sportid;

        /**
         * Gets the value of the sportid property.
         * 
         * @return
         *     possible object is
         *     {@link Long }
         *     
         */
        public Long getSportid() {
            return sportid;
        }

        /**
         * Sets the value of the sportid property.
         * 
         * @param value
         *     allowed object is
         *     {@link Long }
         *     
         */
        public void setSportid(Long value) {
            this.sportid = value;
        }

    }

}
