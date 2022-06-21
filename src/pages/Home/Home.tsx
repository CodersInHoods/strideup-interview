import { parkApi } from "api";
import { ParkForm } from "components/ParkForm";
import { ParksList } from "components/ParksList";
import { useEffect, useState } from "react";

export const Home = () => {
  const [parksListData, setParksListData] = useState([]);
  const [parksListQuery, setParksListQuery] = useState("");

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const { data } = await parkApi.getParks(parksListQuery);

      isMounted && setParksListData(data);
    };

    parksListQuery && init();

    return () => {
      isMounted = false;
    };
  }, [parksListQuery]);

  const parkFormHandler = (newParksList: string) => {
    setParksListQuery(newParksList);
  };

  return (
    <div>
      <ParkForm onSubmit={parkFormHandler} />
      <ParksList parksListData={parksListData} />
    </div>
  );
};
