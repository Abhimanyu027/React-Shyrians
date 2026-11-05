import React from "react";

const Card = (props) => {

    console.log(props);

  return (
    <div>
      <h1>{props.user} : {props.age}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        eligendi aut itaque omnis dignissimos, iure minima, hic corrupti at,
        deleniti nesciunt officiis. Veritatis fuga fugiat veniam in quo. Porro
        eligendi facere dicta, veniam molestiae reprehenderit nemo minima alias
        quae, officiis consectetur quos nostrum maxime ratione esse? Pariatur
        dolorem natus est ad accusantium similique? Itaque, eius cupiditate.
      </p>
    </div>
  );
};

export default Card;
