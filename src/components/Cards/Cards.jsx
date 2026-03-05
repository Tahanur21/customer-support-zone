
import Card from "./Card";

const Cards = ({posts,handleSelect}) => {
    return (
        <div className="col-span-2 space-y-6 mt-10">
            <h1 className="text-3xl text-[#34485A] font-semibold">Customer Tickets : 10/{posts.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                {
                 posts.map((post,idx) => 
                    <Card
                    key={idx}
                    post={post}
                    handleSelect={handleSelect}/>
                 )
                }
            </div>
            
        </div>
    );
};

export default Cards;