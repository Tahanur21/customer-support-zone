import { MdOutlineDateRange } from "react-icons/md";


const Card = ({ post,handleSelect }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    post;

  return (
    <div onClick={()=>{
        handleSelect(post,id)
    }} className="card bg-base-100 shadow-sm">
      <div className="card-body space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-[22px] text-[#001931]">{title}</h2>
          <button
            className={
              status === "Open"
                ? "btn bg-green-200 border border-green-500 rounded-4xl text-green-700 text-lg"
                : "btn bg-yellow-100 border border-yellow-500 text-yellow-700 rounded-4xl text-lg"
            }
          >
            <span
              className={
                status === "Open"
                  ? "status status-success p-2 rounded-full mr-1"
                  : "status status-warning p-2 rounded-full mr-1"
              }
            ></span>
            {status}
          </button>
        </div>
        <div className="h-20">
        <p className="text-[#627382] text-[16px]">{description}</p>
        </div>
        <div className="flex justify-between items-center text-[#627382]">
          <div className="flex gap-3">
            <span>#{id}</span>
            <p className={
                priority === 'HIGH PRIORITY' 
                ? "text-red-400 font-bold" 
                : priority === 'MEDIUM PRIORITY'
                ? "text-yellow-400 font-bold" 
                : "text-green-400 font-bold" }>{priority}</p>
          </div>
          <div className="flex gap-7">
            <p className="text-sm font-bold">{customer}</p>
            <div className="flex items-center gap-2 ">
                <MdOutlineDateRange className="text-lg"/>
                 <p>{createdAt}</p>
            </div>
          </div>
        </div>
        <div className="card-actions">{/* ... */}</div>
      </div>
    </div>
  );
};

export default Card;
