import React, { useState, useEffect } from "react";
import axios from "axios";
import FarmersCard from "../farmersCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Badge,
  OverlayTrigger,
  Tooltip,
  Spinner,
  Button
} from "react-bootstrap";

const Home = props => {
  const [numberOfFarmersPerPage, setNumberPerPage] = useState(9);
  const [isLoading, setIsloading] = useState(false);
  const [farmersDetails, setFarmersDetails] = useState([]);
  const [recordsCount, setRecordsCount] = useState(0);
  const [baseImageUrl, setBaseImageUrl] = useState("");
  const [ loader, setLoader ] = useState(`.....Loading More Farmers`)

  useEffect(() => {
    setIsloading(true);
    (async function() {
      try {
        const response = await axios.get(
          `https://theagromall.com/api/v2/get-sample-farmers?limit=${numberOfFarmersPerPage}`
        );

        const {
          data: { data }
        } = response;

        const { farmers, totalRec, imageBaseUrl } = data;

        setFarmersDetails(farmers);
        setRecordsCount(totalRec);
        setBaseImageUrl(imageBaseUrl);

        setIsloading(false);
      } catch (err) {
        setIsloading(false);
      }
    })();
  }, []);

  const addMoreData = async (number) => {
    try {
      const response = await axios.get(
        `https://theagromall.com/api/v2/get-sample-farmers?limit=${number}`
      );

      const {
        data: { data }
      } = response;

      const { farmers, totalRec, imageBaseUrl } = data;

      setFarmersDetails(farmers);
      setRecordsCount(totalRec);
      setBaseImageUrl(imageBaseUrl);

      setIsloading(false);
    } catch (err) {
      setIsloading(false);
    }
  }

  let farmersView;

  if (isLoading) {
    farmersView = <main className="linear-background"></main>;
  }

  if (!isLoading && farmersDetails.length > 0) {

   let eachCard =  farmersDetails.map((eachFarmerDetails, index) => (
      <FarmersCard
        key={index}
        eachFarmerDetails={eachFarmerDetails}
        baseImageUrl={baseImageUrl}
      />
      ));

    farmersView = (
      <>
      <InfiniteScroll
        dataLength={numberOfFarmersPerPage}
        next={recordsCount ? () => addMoreData(numberOfFarmersPerPage + 9) : null}
        hasMore={recordsCount ? true : false}
        loader={loader}
      >
      {eachCard}
      </InfiniteScroll>
          {numberOfFarmersPerPage ? (
            <Button variant="primary" className="mt-2 mb-2" onClick={() => addMoreData(numberOfFarmersPerPage + 9) }>
            Load More <Badge variant="light">{recordsCount}</Badge>
              <span className="sr-only">Load More</span>
            </Button>
          ) : (
            ""
          )}
          </>
    );
  }
  return (
    <>
      <div className="containerz">{farmersView}</div>
    </>
  );
};

export default Home;
