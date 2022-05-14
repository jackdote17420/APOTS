import React, { Component } from 'react';

class About_us extends Component {
    render() {
        return (
            
            <div>
            <div id="topic" style={{backgroundImage: 'url(/images/farm.jpg)'}}>
              <h1 className="text-topic">Thông tin về trang web</h1>
            </div>
            {/* Begin: content  */}
            <div id="about_us-wp-content">
              <div className="about_us-detail">
                <p>Dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mau massa, eleifend et purus vel feugiat rutrum . Cras vitae est vel ipsum fau bus fermentum a ultricies urna cum sociis.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut sed bibendum leo. Mauris ma massa eleifend et purus vel feugiat rutrum nulla cras vitae est vel ipsum faucibus ferme aultricies urna cum sociis natoque penatibus.</p>
                <br />
                <p>Famur sit amet consectetur adipiscing elit ut sed bibenum leo. Mauris mauris as sa eleifend et purus vel feugiat rutrum nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut sed bibendum leo mauris massa, eleifend et purus vel, feugiat rutrum nulla cras vitae est vel ipsum faucibus ferm aultricies urna dum sociis natoque penatibus et magnis.</p>
                <ul>
                  <li>Phasellus sit amet velit auctor turpis rhoncus.</li>
                  <li>Phasellus sit amet velit auctor turpis rhoncus.</li>
                  <li>Phasellus sit amet velit auctor turpis rhoncus.</li>
                  <li>Phasellus sit amet velit auctor turpis rhoncus.</li>
                </ul>
                <p>Dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mau massa, eleifend et purus vel feugiat rutrum nulla. Cras vitae est vel ipsum fau bus fermentum a ultricies urna cum sociis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum deleniti deserunt temporibus, iure eos! Iusto, accusantium vel? Suscipit aliquid nostrum qui quod? Aliquid laboriosam consequuntur laudantium saepe! Eligendi, incidunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente aut accusantium molestiae optio repellendus id alias quod omnis fuga facere ex adipisci, repudiandae ea nulla hic. Maxime, aperiam sint.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque fuga numquam sequi, adipisci libero amet quo mollitia unde voluptatum ipsam non commodi ipsum cumque dolorum soluta est in repellat.</p>
              </div>
              <div id="highlight">
                <div className="highlight-text">2<br /> year of experience</div>
                <div className="highlight-text">100<br /> machineries</div>
                <div className="highlight-text">2<br /> customers</div>
              </div>
            </div>
            {/* End: content  */}
          </div>
          

        );
    }
}

export default About_us;