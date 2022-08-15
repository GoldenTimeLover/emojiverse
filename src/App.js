import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Spacer from "./components/Spacer";
import Searchbar from "./components/Searchbar";
import { useState, useEffect } from "react";
import Toggler from "./components/Toggler";
import pData from "./productsData.json";
import aData from "./articleData.json";
import Footer from "./components/Footer";
import Column from "./components/Column";
import Modal from "./components/Modal";
import SubmitForm from "./components/SubmitForm";
import AboutPopup from "./components/AboutPopup";
function App() {
  const [viewType, setViewType] = useState("products 📦");
  const [searchQuery, setSearchQuery] = useState("");
  const [productData, setProductData] = useState(pData);
  const [articleData, setArticleData] = useState(aData);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const searchFilter = (entry, sQuery) => {
    const { name, description, category } = entry;
    const query = sQuery.toLowerCase();
    return (
      name.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query)
    );
  };
  const articleSearchFilter = (entry, sQuery) => {
    const { title, description, author } = entry;
    const query = sQuery.toLowerCase();
    return (
      title.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query) ||
      author.toLowerCase().includes(query)
    );
  };

  useEffect(() => {
    const pResults = pData.filter((entry) => searchFilter(entry, searchQuery));
    const aResults = aData.filter((entry) =>
      articleSearchFilter(entry, searchQuery)
    );
    setArticleData(aResults);
    setProductData(pResults);
  }, [searchQuery]);

  const handleToggle = (type) => {
    setViewType(type);
  };

  const toggleShowSubmitModal = () => {
    setShowSubmitModal(!showSubmitModal);
  };
  const toggleAboutModal = () => {
    setShowAboutModal((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white font-Montserrat">
      {showSubmitModal && (
        <Modal onConfirm={toggleShowSubmitModal}>
          <SubmitForm exitForm={toggleShowSubmitModal} />
        </Modal>
      )}
      {showAboutModal && (
        <Modal onConfirm={toggleAboutModal}>
          <AboutPopup />
        </Modal>
      )}
      <Navbar
        toggleShowSubmitModal={toggleShowSubmitModal}
        toggleAboutModal={toggleAboutModal}
      />
      <Spacer />
      <div className="flex flex-col items-center">
        <Hero />
        <Spacer />
        <Toggler
          left={"products 📦"}
          right={"Articles/Misc 📰"}
          onToggle={handleToggle}
        />
        <Spacer />
        <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Spacer />
        {/* display products */}
        {viewType === "products 📦" && <Grid data={productData} />}
        {/* display articles */}
        {viewType === "Articles/Misc 📰" && <Column data={articleData} />}
        {productData.length === 0 && articleData.length === 0 && (
          <div className="text-center">
            <h1 className="text-2xl font-bold">No results found</h1>
            <p className="text-sm">Try searching for something else</p>
            <p className="text-8xl my-6">🤷</p>
          </div>
        )}
      </div>
      <Spacer />
      <Footer />
    </div>
  );
}

export default App;
