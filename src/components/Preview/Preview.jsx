export const Preview = () => {
  return (
    <div class="preview">
      <div class="preview-img">
        <img src={require("../../images/product-img1.jpg")} alt="loading..." />
      </div>
      <div class="preview-description">
        <h1 class="Preview-header">
          UFC VENUM MAGOMED FIGHT NIGHT MEN'S WALKOUT JERSEY
        </h1>
        <h2>&#8377; 2000</h2>
        <div class="description">
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
          <a href="./Cart.html" class="link">
            ADD TO CART
          </a>
        </button>
      </div>
    </div>
  );
};
