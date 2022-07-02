import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
    
    <div class="navbar-wrap">
    <div class="hloov-navbar w-nav">
        
        <div class="hloov-nav-container">
            <div class="w-nav-button" >
                <div class="w-icon-nav-menu"></div>
            </div>
            <a href="/" aria-current="page" class="hloov-brand w-nav-brand w--current" aria-label="home">
                <img src="https://uploads-ssl.webflow.com/61f3a8ab34a4598782349a76/61f4351cb2b692cea86fa47b_Hloov%20Logo%20Color.svg" loading="lazy" height="25" alt="" class="hloov-logo"/>
            </a>
            <div class="hloov-menu-wrap">
                <nav role="navigation" class="hloov-navigation-menu-wrapper w-nav-menu">
                    <div data-hover="false" data-delay="0" class="mega-menu-dropdown w-dropdown">
                        <div class="mega-menu-dropdown-toggle w-dropdown-toggle">
                            <div class="mega-menu-text">Platform</div>
                        </div> 
                    </div>
                    <div data-hover="false" data-delay="0" class="mega-menu-dropdown w-dropdown">
                        <div class="mega-menu-dropdown-toggle w-dropdown-toggle">
                            <div class="mega-menu-text">Sectors</div>
                        </div>   
                    </div>
                    <div data-hover="false" data-delay="0" class="mega-menu-dropdown w-dropdown">
                        <div class="mega-menu-dropdown-toggle w-dropdown-toggle">
                            <div class="mega-menu-text">Careers</div>
                        </div>
                    </div>
                    <div data-hover="false" data-delay="0" class="mega-menu-dropdown w-dropdown">
                        <div class="mega-menu-dropdown-toggle w-dropdown-toggle">
                            <div class="mega-menu-text">Connect</div>
                        </div>
                   </div>
                <div data-hover="false" data-delay="0" class="mega-menu-dropdown w-dropdown">
                    <div class="mega-menu-dropdown-toggle w-dropdown-toggle">
                        <div class="mega-menu-text">Hloov</div>
                    </div>
                    
                </div>
            </nav>
         
        </div>
    </div>
   
</div>
</div>
        
    </>
  )
}

export default Header