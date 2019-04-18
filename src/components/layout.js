/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */


import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import 'typeface-roboto';
import "./layout.css"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        > 
          <main>{children}</main>
          <AccessAlarmIcon/>

          <footer className="footer">

            <div className="row">
              <a href="https://www.gatsbyjs.org/docs/" className="col">
                <p className="icon text">
                 <AccessAlarmIcon/>
                </p>
                <p className="text">Docs</p>
               </a>
               <a href="https://www.gatsbyjs.org/tutorial/" className="col">
                 <p className="icon text">
                  <AccessAlarmIcon/>
                 </p>            
                 <p className="text">Tutorial</p>
               </a>
               <a href="https://www.gatsbyjs.org/plugins/" className="col">
                <p className="icon text">
                 <AccessAlarmIcon/>
                </p>
                <p className="text">plugins</p>
               </a>
               <a href="https://www.gatsbyjs.org/blog/" className="col">
                <p className="icon text">
                 <AccessAlarmIcon/>
                </p>           
                <p className="text">Blog</p>
               </a>
               <a href="https://www.gatsbyjs.org/showcase/" className="col">
                <p className="icon text">
                  <AccessAlarmIcon/>
                </p>
                <p className="text">Showcase</p>
               </a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
