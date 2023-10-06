import { HeartFilled, DislikeFilled } from "@ant-design/icons";

const Count = ({ like, dislike }: { like: number; dislike: number }) => {
  return (
    <>
      <div className="my-2 ">
        <div className="inline mr-3">
          <HeartFilled />
          <p className="inline ml-1">{like}</p>
        </div>
        <div className="inline">
          <DislikeFilled />
          <p className="inline ml-1">{dislike}</p>
        </div>
      </div>
    </>
  );
};

export default Count;
