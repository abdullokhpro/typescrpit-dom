import React, { FC } from "react";
import "./collection.scss";
import collection from "../../assets/collection/collection.png";

const Collection: FC = () => {
  return (
    <section className="collection">
      <div className="container collection__container">
        <div className="collection__left">
          <img src={collection} alt="" width={800} height={400} />
        </div>
        <div className="collection__right">
          <h2>коллекция 2018</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
            ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
            nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque
            magna consectetur. Amet convallis quis gravida facilisis vulputate.
            Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit
            quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent
            viverra nulla nullam natoque volutpat curabitur auctor. Viverra
            viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam
            a aliquam egestas leo orci pharetra sed diam.{" "}
          </p>
          <button>посмотреть коллекцию</button>
        </div>
      </div>
    </section>
  );
};

export default Collection;
