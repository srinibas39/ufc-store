export const Preview = () => {
  return (
    <div className="preview">
      <div className="preview-img">
        <img src={require("../../images/product-img1.jpg")} alt="loading..." />
      </div>
      <div className="preview-description">
        <h1 className="Preview-header">
          UFC VENUM MAGOMED FIGHT NIGHT MEN'S WALKOUT JERSEY
        </h1>
        <h2>&#8377; 2000</h2>
        <div className="description">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            vitae officiis in distinctio! Magni obcaecati cum suscipit totam
            labore quibusdam voluptas. Expedita, praesentium eligendi? Nisi odio
            quo mollitia similique ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tenetur quod et qui tempore ipsum. Repellat
            corrupti eum architecto quae cumque quos temporibus! Laborum
            quisquam, cupiditate sapiente necessitatibus debitis doloremque
            veritatis?
          </p>
        </div>
        <button>
          <a href="./Cart.html" className="link">
            ADD TO CART
          </a>
        </button>
      </div>
    </div>
  );
};
