import BigCard from "./BigCard";
import GenresInDb from "./GenresInDb";

function BigCardRow() {
  return (
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      <BigCard title="Last movie in database">
        <div className="text-center">
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            style={{
              width: "40rem",
            }}
            src="/mandalorian.jpg"
            alt=" Star Wars - Mandalorian "
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          consequatur explicabo officia inventore libero veritatis iure
          voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis
          quae dolorem culpa citationem ratione aperiam voluptatum non corporis
          ratione aperiam voluptatum quae dolorem culpa ratione aperiam
          voluptatum?
        </p>
        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
          View movie detail
        </a>
      </BigCard>

      {/* <!-- End content row last movie in Data Base --> */}

      {/* <!-- Genres in DB --> */}
      <BigCard title="Genres in database">
        <GenresInDb />
      </BigCard>
    </div>
  );
}

export default BigCardRow;
