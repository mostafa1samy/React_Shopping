import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLOading] = useState(false);
  let compoentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLOading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (compoentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLOading(false);

        console.log(filter);
      }
      return () => {
        compoentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loadingg = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProducts = (cat) => {
    let updataList = data.filter((x) => x.category === cat);
    setFilter(updataList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelery's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filterProducts("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card p-4 h-100 text-center" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      className="btn btn-outline-dark"
                      to={`/products/${product.id}`}
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  console.log(data);
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 text-center fw-bolder">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loadingg /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
