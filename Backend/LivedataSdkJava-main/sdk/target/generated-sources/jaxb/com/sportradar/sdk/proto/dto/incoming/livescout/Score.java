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
 *       &lt;all&gt;
 *         &lt;element ref="{}score" minOccurs="0"/&gt;
 *       &lt;/all&gt;
 *       &lt;attribute name="type" use="required"&gt;
 *         &lt;simpleType&gt;
 *           &lt;union&gt;
 *             &lt;simpleType&gt;
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string"&gt;
 *                 &lt;pattern value="set([1-9]|1[0-3])"/&gt;
 *                 &lt;pattern value="frame([1-9]|[12][0-9]|3[0-5])?"/&gt;
 *                 &lt;pattern value="period[1-5]"/&gt;
 *                 &lt;pattern value="map[1-7]"/&gt;
 *                 &lt;pattern value="game[1-5]"/&gt;
 *                 &lt;pattern value="inning[1-9][0-9]*"/&gt;
 *                 &lt;pattern value="(overtime|overtime[1-9][0-9]*)"/&gt;
 *               &lt;/restriction&gt;
 *             &lt;/simpleType&gt;
 *             &lt;simpleType&gt;
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string"&gt;
 *                 &lt;enumeration value="current"/&gt;
 *                 &lt;enumeration value="match"/&gt;
 *                 &lt;enumeration value="game"/&gt;
 *                 &lt;enumeration value="leg"/&gt;
 *                 &lt;enumeration value="tiebreak"/&gt;
 *                 &lt;enumeration value="goldensetmatch"/&gt;
 *                 &lt;enumeration value="goldenset"/&gt;
 *                 &lt;enumeration value="break"/&gt;
 *                 &lt;enumeration value="end"/&gt;
 *                 &lt;enumeration value="penalties"/&gt;
 *               &lt;/restriction&gt;
 *             &lt;/simpleType&gt;
 *           &lt;/union&gt;
 *         &lt;/simpleType&gt;
 *       &lt;/attribute&gt;
 *       &lt;attribute name="t2" use="required"&gt;
 *         &lt;simpleType&gt;
 *           &lt;restriction base="{http://www.w3.org/2001/XMLSchema}double"&gt;
 *           &lt;/restriction&gt;
 *         &lt;/simpleType&gt;
 *       &lt;/attribute&gt;
 *       &lt;attribute name="t1" use="required"&gt;
 *         &lt;simpleType&gt;
 *           &lt;restriction base="{http://www.w3.org/2001/XMLSchema}double"&gt;
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

})
@XmlRootElement(name = "score")
public class Score
    extends IncomingMessage
{

    protected Score score;
    @XmlAttribute(name = "type", required = true)
    protected String type;
    @XmlAttribute(name = "t2", required = true)
    protected double t2;
    @XmlAttribute(name = "t1", required = true)
    protected double t1;

    /**
     * Gets the value of the score property.
     * 
     * @return
     *     possible object is
     *     {@link Score }
     *     
     */
    public Score getScore() {
        return score;
    }

    /**
     * Sets the value of the score property.
     * 
     * @param value
     *     allowed object is
     *     {@link Score }
     *     
     */
    public void setScore(Score value) {
        this.score = value;
    }

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
     * Gets the value of the t2 property.
     * 
     */
    public double getT2() {
        return t2;
    }

    /**
     * Sets the value of the t2 property.
     * 
     */
    public void setT2(double value) {
        this.t2 = value;
    }

    /**
     * Gets the value of the t1 property.
     * 
     */
    public double getT1() {
        return t1;
    }

    /**
     * Sets the value of the t1 property.
     * 
     */
    public void setT1(double value) {
        this.t1 = value;
    }

}