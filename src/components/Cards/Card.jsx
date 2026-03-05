import { MdOutlineDateRange } from "react-icons/md";

const Card = ({ post, handleSelect }) => {
  const { id, title, description, customer, priority, status, createdAt } = post;

  return (
    <div
      onClick={() => handleSelect(post, id)}
      className="card bg-base-100 shadow-sm hover:shadow-md transition cursor-pointer h-full"
    >
      <div className="card-body flex flex-col justify-between space-y-3 p-4 sm:p-5 h-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h2 className="card-title text-lg sm:text-xl md:text-[22px] text-[#001931]">
            {title}
          </h2>

          <button
            className={
              status === "Open"
                ? "btn bg-green-200 border border-green-500 rounded-full text-green-700 text-xs sm:text-sm px-3 py-1"
                : "btn bg-yellow-100 border border-yellow-500 text-yellow-700 rounded-full text-xs sm:text-sm px-3 py-1"
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

        <div className="flex-grow">
          <p className="text-[#627382] text-sm sm:text-[16px] line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-[#627382]">
          <div className="flex gap-3 text-sm sm:text-base">
            <span>#{id}</span>
            <p
              className={
                priority === "HIGH PRIORITY"
                  ? "text-red-400 font-bold"
                  : priority === "MEDIUM PRIORITY"
                  ? "text-yellow-400 font-bold"
                  : "text-green-400 font-bold"
              }
            >
              {priority}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
            <p className="font-bold">{customer}</p>

            <div className="flex items-center gap-2">
              <MdOutlineDateRange className="text-lg" />
              <p>{createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;