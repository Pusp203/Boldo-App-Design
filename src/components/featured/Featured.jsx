import React from "react";
import "./featured.scss";
import rectangle from "../../assets/rectangle.png";
import chandler from "../../assets/chandler.png";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-body">
        <div className="featured-body_text">
          <div className="featured-body_text-main">
            <div className="featured-body_text-main-paragraph">
              <p>Pitch termsheet backing validation focus release.</p>
            </div>
            <div className="featured-body_text-main-headings">
              <div className="featured-body_text-main-headings-top">
                {" "}
                <h2>Category</h2>
                <p>November 22, 2021</p>{" "}
              </div>
              <div className="featured-body_text-main-headings-bottom">
                {" "}
                <h4> By: Monica Geller</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-body_bottomText">
          <div className="featured-body_bottomText_image">
            <img src={rectangle} alt="" />
          </div>
          <div className="featured-body_bottomText_paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit luctus
              tristique varius mauris ullamcorper eu, nisi aliquet mus elementum
              nascetur. Nascetur volutpat mus malesuada lectus quam faucibus
              ultricies dictum cum, nostra habitant enim aliquam porttitor
              facilisis dapibus tellus tincidunt blandit, primis porta gravida
              interdum per fames nisi hac. Varius porta leo augue aliquam
              dictumst libero rutrum etiam iaculis, est vitae pulvinar magnis
              quam nunc nullam pharetra dapibus, porttitor justo dignissim sed
              himenaeos tellus hac orci. Pellentesque ac nisl dapibus quis
              auctor conubia rutrum, dignissim enim nec phasellus sodales
              tincidunt fusce sagittis, maecenas potenti vivamus porttitor purus
              curabitur. Vestibulum leo dis fames vel ut hac bibendum montes,
              netus nullam neque litora facilisis mollis metus, vehicula est at
              mi dui class turpis. Tincidunt varius ad aliquam dictumst egestas
              commodo maecenas pellentesque proin blandit, aliquet eu volutpat
              lacinia sagittis bibendum ullamcorper mollis malesuada porttitor,
              eget posuere convallis class non fermentum ultricies taciti
              tempus. Turpis pretium ullamcorper commodo senectus nullam ac
              donec, rhoncus cum diam vel duis dapibus. <br /> Dictum
              suspendisse mattis gravida suscipit fusce diam penatibus curae
              sociis magnis, primis iaculis himenaeos fermentum dapibus dui
              faucibus inceptos velit, aliquam viverra ornare varius nulla
              nullam enim placerat eros. Maecenas diam blandit parturient
              facilisi cursus cum placerat, inceptos fames porttitor habitant
              odio pellentesque sapien, tristique cras nec fringilla fusce sem.
              Quam libero sollicitudin viverra risus bibendum inceptos, massa et
              suscipit malesuada vehicula est tempor, mi donec neque natoque
              vivamus. Ornare suspendisse morbi nisi per sed aptent nascetur,
              dignissim turpis mollis blandit euismod inceptos, varius fermentum
              nulla sagittis sociis hendrerit. <br /> Magna eget et a aliquam
              nostra rutrum cursus, pellentesque libero suspendisse eu volutpat
              fermentum pharetra varius, tortor massa curae quis interdum
              sapien. Fames nullam pulvinar quisque nec tempor blandit
              condimentum, malesuada class proin augue magna ac per platea, diam
              aenean senectus varius erat curabitur. Vel aenean nam ullamcorper
              a netus fames tincidunt, nullam primis non quis senectus torquent,
              lectus diam vivamus class luctus suspendisse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
