import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRooms from "../../redux/slices/patient/roomThunk";

const Rooms = () => {
  const rooms = useSelector((state) => state.rooms?.data);
  const [limit, setLimit] = useState(10);

  const dispatch = useDispatch();

  console.log(rooms);

  useEffect(() => {
    dispatch(getRooms({ limit }));
  }, [limit]);

  return (
    <div>
      {rooms &&
        rooms?.map((el) => {
          return (
            <div key={el.id}>
              {el.id}
              {el.room_category} {el.room_number}
            </div>
          );
        })}

      <div>
        <button onClick={() => setLimit(limit + 10)}>Load More</button>
      </div>
    </div>
  );
};

export default Rooms;
