//
// This file was generated by the Eclipse Implementation of JAXB, v3.0.0 
// See https://eclipse-ee4j.github.io/jaxb-ri 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2022.10.22 at 12:13:40 PM CEST 
//


package com.sportradar.sdk.proto.dto.incoming.livescout;

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
 *       &lt;attribute name="type" use="required"&gt;
 *         &lt;simpleType&gt;
 *           &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string"&gt;
 *             &lt;enumeration value="limitedovers"/&gt;
 *             &lt;enumeration value="overs"/&gt;
 *             &lt;enumeration value="days"/&gt;
 *             &lt;enumeration value="mandatorypowerplayovers"/&gt;
 *             &lt;enumeration value="battingpowerplayovers"/&gt;
 *             &lt;enumeration value="powerplay1overs"/&gt;
 *             &lt;enumeration value="powerplay2overs"/&gt;
 *             &lt;enumeration value="powerplay3overs"/&gt;
 *             &lt;enumeration value="maxoversperbowler"/&gt;
 *             &lt;enumeration value="reviews"/&gt;
 *             &lt;enumeration value="maps"/&gt;
 *             &lt;enumeration value="rounds"/&gt;
 *             &lt;enumeration value="overtimerounds"/&gt;
 *             &lt;enumeration value="numberofperiods"/&gt;
 *             &lt;enumeration value="periodlength"/&gt;
 *             &lt;enumeration value="tryvalue"/&gt;
 *             &lt;enumeration value="conversionvalue"/&gt;
 *             &lt;enumeration value="penaltyvalue"/&gt;
 *             &lt;enumeration value="dropgoalvalue"/&gt;
 *             &lt;enumeration value="penaltytryvalue"/&gt;
 *             &lt;enumeration value="numberovertimeperiods"/&gt;
 *             &lt;enumeration value="lengthovertimeperiods"/&gt;
 *             &lt;enumeration value="lengthsuddendeath"/&gt;
 *             &lt;enumeration value="penaltyshootout"/&gt;
 *             &lt;enumeration value="ruleset"/&gt;
 *             &lt;enumeration value="twopointconversionyardline"/&gt;
 *             &lt;enumeration value="extrapointyardline"/&gt;
 *             &lt;enumeration value="noballpenaltyvalue"/&gt;
 *             &lt;enumeration value="tiebreakermethod"/&gt;
 *             &lt;enumeration value="regularinnings"/&gt;
 *           &lt;/restriction&gt;
 *         &lt;/simpleType&gt;
 *       &lt;/attribute&gt;
 *       &lt;attribute name="value" use="required"&gt;
 *         &lt;simpleType&gt;
 *           &lt;restriction base="{http://www.w3.org/2001/XMLSchema}int"&gt;
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
@XmlType(name = "")
@XmlRootElement(name = "format")
public class Format
    extends IncomingMessage
{

    @XmlAttribute(name = "type", required = true)
    protected String type;
    @XmlAttribute(name = "value", required = true)
    protected int value;

    /**
     * Gets the value of the type property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getType() {
        return type;
    }

    /**
     * Sets the value of the type property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setType(String value) {
        this.type = value;
    }

    /**
     * Gets the value of the value property.
     * 
     */
    public int getValue() {
        return value;
    }

    /**
     * Sets the value of the value property.
     * 
     */
    public void setValue(int value) {
        this.value = value;
    }

}
