import * as React from 'react';
import { BlocksResultProps, BlocksProvider } from '@grapesjs/react';
import { MAIN_BORDER_COLOR, cx } from '../common';
import { FunctionComponent } from "react";
import styles from "./leftblock.module.css";
import { Box, Grid, Stack, Typography } from '@mui/material';

export default function HeroImage() {
  return (
    <>
      <div className={styles.frameParent14}>
        
        <div className={styles.headerLight041}>
          <div className={styles.container2}>
            <img
              className={styles.ionlogoXboxIcon2}
              alt=""
              src="/ionlogoxbox@2x.png"
            />
            <div className={styles.menu}>
              <div className={styles.publish}>Services</div>
              <div className={styles.pricing}>
                <div className={styles.publish}>Pricing</div>
                <img
                  className={styles.lighticon}
                  alt=""
                  src="/lighticon@2x.png"
                />
              </div>
              <div className={styles.publish}>Portfolio</div>
              <div className={styles.publish}>Contact us</div>
              <div className={styles.publish}>About us</div>
            </div>
            <div className={styles.right}>
              <div className={styles.lightsearchBox}>
                <img
                  className={styles.lighticon}
                  alt=""
                  src="/lighticon@2x.png"
                />
                <div className={styles.publish}>Search...</div>
              </div>
              <div className={styles.lightbutton}>
                <b className={styles.publish}>Register / Login</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLight041}>
          <div className={styles.bottomBar}>
            <div className={styles.publish}>
              © 2000-2021, All Rights Reserved
            </div>
          </div>
          <div className={styles.menus}>
            <div className={styles.menu1}>
              <b className={styles.faq}>FAQ</b>
              <div className={styles.items}>
                <div className={styles.publish}>Account</div>
                <div className={styles.publish}>Manage Deliveries</div>
                <div className={styles.publish}>Orders</div>
                <div className={styles.publish}>Payments</div>
                <div className={styles.publish}>Returns</div>
              </div>
            </div>
            <div className={styles.menu2}>
              <b className={styles.faq}>Support</b>
              <div className={styles.items}>
                <div className={styles.publish}>Contact us</div>
                <div className={styles.publish}>Online Chat</div>
                <div className={styles.publish}>Whatsapp</div>
                <div className={styles.publish}>Telegram</div>
                <div className={styles.publish}>Ticketing</div>
              </div>
            </div>
            <div className={styles.menu3}>
              <b className={styles.faq}>About</b>
              <div className={styles.items}>
                <div className={styles.publish}>About us</div>
                <div className={styles.publish}>Blog</div>
                <div className={styles.publish}>Careers</div>
                <div className={styles.publish}>Jobs</div>
                <div className={styles.publish}>In Press</div>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.introduction}>
              <img className={styles.logoIcon1} alt="" src="/logo@2x.png" />
              <div className={styles.weAraAContainer}>
                <span
                  className={styles.weAraA2}
                >{`We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... `}</span>
                <b className={styles.readMore}>Read More</b>
              </div>
            </div>
            <div className={styles.socials}>
              <div className={styles.lightminiButton}>
                <img
                  className={styles.lightsocialIcons}
                  alt=""
                  src="/lightsocial-icons@2x.png"
                />
              </div>
              <div className={styles.lightminiButton}>
                <img
                  className={styles.lightsocialIcons}
                  alt=""
                  src="/lightsocial-icons@2x.png"
                />
              </div>
              <div className={styles.lightminiButton}>
                <img
                  className={styles.lightsocialIcons}
                  alt=""
                  src="/lightsocial-icons@2x.png"
                />
              </div>
              <div className={styles.lightminiButton}>
                <img
                  className={styles.lightsocialIcons}
                  alt=""
                  src="/lightsocial-icons@2x.png"
                />
              </div>
              <div className={styles.lightminiButton}>
                <img
                  className={styles.lightsocialIcons}
                  alt=""
                  src="/lightsocial-icons@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
