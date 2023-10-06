import { Input, Button } from "antd";
import CardDetail from "../components/CardDetail";
import Count from "../components/Count";
import { useParams } from "react-router-dom";
import dataItems from "../data";

const { TextArea } = Input;
// const onChange = (e) => {
//   console.log("Change:", e.target.value);
// };

const EditCard = () => {
  const { id } = useParams();
  // const item_array = dataItems.filter((data) =>  data.id.toString() === id); // return array
  const item = dataItems.find((data) => data.id.toString() === id); // return array
  const isLoading = false;

  return (
    <>
      <div className=" w-4/5 m-auto mt-12">
        <div className="flex justify-center">
          <div className="flex-col justify-center">
            {!isLoading && item ? (
              <CardDetail
                id={item.id}
                name={item.name}
                category={item.name}
                imgURL={item.imgURL}
                description={item.description}
                remove=""
              />
            ) : (
              <>No data</>
            )}

            {isLoading && (
              <>
                <div className="animate-pulse bg-slate-500 aspect-[3/4] w-full rounded-lg"></div>
              </>
            )}

            <div className="flex justify-center">
              <Count />
            </div>
          </div>
        </div>

        <div className="py-8">
          <Input placeholder="Basic usage" className="mb-2" />
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            // onChange={onChange}
            placeholder="disable resize"
            className=""
          />
        </div>
        <div className="flex justify-center">
          <Button type="primary">Primary Button</Button>
        </div>
      </div>
    </>
  );
};
export default EditCard;
