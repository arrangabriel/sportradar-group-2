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
 *             &lt;enumeration value="best of"/&gt;
 *             &lt;enumeration value="first to"/&gt;
 *             &lt;enumeration value="number of periods"/&gt;
 *             &lt;enumeration value="var"/&gt;
 *             &lt;enumeration value="number of ends in tie break"/&gt;
 *             &lt;enumeration value="number of ends per set"/&gt;
 *             &lt;enumeration value="match type"/&gt;
 *             &lt;enumeration value="number of overtime rounds"/&gt;
 *             &lt;enumeration value="rapid markets"/&gt;
 *             &lt;enumeration value="sin bin"/&gt;
 *             &lt;enumeration value="jersey color"/&gt;
 *             &lt;enumeration value="period length"/&gt;
 *             &lt;enumeration value="overtime length"/&gt;
 *             &lt;enumeration value="penalty shootout"/&gt;
 *             &lt;enumeration value="rule set"/&gt;
 *             &lt;enumeration value="number of overtime periods"/&gt;
 *             &lt;enumeration value="overtime victory condition"/&gt;
 *             &lt;enumeration value="player markets"/&gt;
 *             &lt;enumeration value="overtime team strength"/&gt;
 *             &lt;enumeration value="number of extra innings"/&gt;
 *             &lt;enumeration value="technical timeout"/&gt;
 *             &lt;enumeration value="points in final set"/&gt;
 *             &lt;enumeration value="deciding score"/&gt;
 *             &lt;enumeration value="play through in regular sets"/&gt;
 *             &lt;enumeration value="tiebreak scoring procedure"/&gt;
 *             &lt;enumeration value="rounds per map"/&gt;
 *             &lt;enumeration value="legs to win"/&gt;
 *             &lt;enumeration value="legs to win in last set"/&gt;
 *             &lt;enumeration value="sudden death leg"/&gt;
 *             &lt;enumeration value="sudden death leg in last set"/&gt;
 *             &lt;enumeration value="draw possible"/&gt;
 *             &lt;enumeration value="legs to trigger sudden death"/&gt;
 *             &lt;enumeration value="legs to trigger sudden death in last set"/&gt;
 *             &lt;enumeration value="number of legs in early sets"/&gt;
 *             &lt;enumeration value="number of legs in last set"/&gt;
 *             &lt;enumeration value="double in"/&gt;
 *             &lt;enumeration value="sudden death in last game"/&gt;
 *           &lt;/restriction&gt;
 *         &lt;/simpleType&gt;
 *       &lt;/attribute&gt;
 *       &lt;attribute name="value" use="required"&gt;
 *         &lt;simpleType&gt;
 *           &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string"&gt;
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
@XmlRootElement(name = "matchproperty")
public class Matchproperty
    extends IncomingMessage
{

    @XmlAttribute(name = "type", required = true)
    protected String type;
    @XmlAttribute(name = "value", required = true)
    protected String value;

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
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getValue() {
        return value;
    }

    /**
     * Sets the value of the value property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setValue(String value) {
        this.value = value;
    }

}