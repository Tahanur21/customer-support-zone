import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Bannars from "./components/Banners/Banners";
import Cards from "./components/Cards/Cards";
import Selects from "./components/Selects/Selects";
import Footer from "./components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [posts, setPost] = useState([]);
  const [selects, setSelects] = useState([]);
  const [complete, setComplete] = useState([]);
  // const [tickets,setTicket] = useState([]);
  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  const handleSelect = (item, id) => {
    const newItem = [...selects, item];
    setSelects(newItem);
    const removeSelect = posts.filter((post) => post.id !== id);
    setPost(removeSelect);
    toast.success("Ticket selected successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleCompleteItem = (item, id) => {
    const newItemComplete = [...complete, item];
    setComplete(newItemComplete);
    const removCompleteItem = selects.filter((select) => select.id !== id);
    setSelects(removCompleteItem);
    toast.success("Task Completed!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handleTickets = (items, id) => {
    setPost(posts);
  };
  return (
    <>
      <div className="">
        <div className="max-w-screen-2xl mx-auto px-10 py-3">
          <Header
            complete={complete}
            handleTickets={handleTickets}
            posts={posts}
          />
        </div>
        <div className="bg-stone-100">
          <div className="max-w-8xl mx-auto px-10 py-5">
            <Bannars selects={selects} complete={complete} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-2 grid grid-cols-2">
                <Cards posts={posts} handleSelect={handleSelect} />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Selects
                  selects={selects}
                  handleCompleteItem={handleCompleteItem}
                  complete={complete}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
