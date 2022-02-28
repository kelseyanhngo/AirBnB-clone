import React from "react";
import { Table } from "reactstrap";
import "./styles.scss";

function Footer(props) {
  return (
    <div className="footer-container">
      <Table style={{width: "100%", padding: "80px", paddingLeft: '120px'}}>
        <thead >
          <tr style={{ textAlign: 'left'}}>
            <th style={{width: "25%", paddingBottom: '20px'}}>Support</th>
            <th style={{width: "25%", paddingBottom: '20px'}}>Community</th>
            <th style={{width: "25%", paddingBottom: '20px'}}>Hosting</th>
            <th style={{width: "25%", paddingBottom: '20px'}}>About</th>
          </tr>
        </thead>
        <tbody style={{textAlign: 'left', cursor: 'pointer'}}>
          <tr>
            <td>Help Center</td>
            <td>Airbnb.org: disaster relief housing</td>
            <td>Try hosting</td>
            <td>Newsroom</td>
          </tr>
          <tr>
            <td >Safety information</td>
            <td>Support Afghan refugees</td>
            <td>AirCover: protection for Hosts</td>
            <td>Learn about new features</td>
          </tr>
          <tr>
            <td >Cancellation options</td>
            <td>Combating discrimination</td>
            <td>Explore hosting resouces</td>
            <td>Letter from our founder</td>
          </tr>
          <tr>
            <td >Our COVID-19 Respond</td>
            <td></td>
            <td>Visit our community forum</td>
            <td>Carrers</td>
          </tr> <tr>
            <td >Supporting people with disabilities</td>
            <td></td>
            <td>How to host responsibly</td>
            <td>Investors</td>
          </tr> <tr>
            <td >Report a neighbourhood concern</td>
            <td></td>
            <td></td>
            <td>Airbnb Luxe</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Footer;
