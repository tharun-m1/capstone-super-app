import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./cat.module.css";
import SuperLogo from "../../components/logo/SuperLogo";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Vectorimage from "../../assets/Vector.png";
import Action from "../../assets/images/action.png";
import Drama from "../../assets/images/drama.png";
import Romance from "../../assets/images/romance.png";
import Thriller from "../../assets/images/thriller.png";
import Western from "../../assets/images/western.png";
import Horror from "../../assets/images/horror.png";
import Fantasy from "../../assets/images/fantasy.png";
import Music from "../../assets/images/music.png";
import Fiction from "../../assets/images/fiction.png";
function Categories() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSelectedItem, setIsSelectedItem] = useState([
    {
      id: "Action",
      isSelected: false,
    },
    {
      id: "Drama",
      isSelected: false,
    },
    {
      id: "Romance",
      isSelected: false,
    },
    {
      id: "Thriller",
      isSelected: false,
    },
    {
      id: "Western",
      isSelected: false,
    },
    {
      id: "Horror",
      isSelected: false,
    },
    {
      id: "Fantasy",
      isSelected: false,
    },
    {
      id: "Music",
      isSelected: false,
    },
    {
      id: "Fiction",
      isSelected: false,
    },
  ]);
  const dataSet = [
    {
      id: 1,
      title: "Action",
      image: Action,
      color: "rgba(255, 82, 9, 1)",
      // isSelected: false,
    },
    {
      id: 2,
      title: "Drama",
      image: Drama,
      color: "rgba(215, 164, 255, 1)",
      // isSelected: false,
    },
    {
      id: 3,
      title: "Romance",
      image: Romance,
      color: "rgba(20, 138, 8, 1)",
      // isSelected: false,
    },
    {
      id: 4,
      title: "Thriller",
      image: Thriller,
      color: "rgba(132, 194, 255, 1)",
      // isSelected: false,
    },
    {
      id: 5,
      title: "Western",
      image: Western,
      color: "rgba(144, 37, 0, 1)",
      // isSelected: false,
    },
    {
      id: 6,
      title: "Horror",
      image: Horror,
      color: "rgba(115, 88, 255, 1)",
      // isSelected: false,
    },
    {
      id: 7,
      title: "Fantasy",
      image: Fantasy,
      color: "rgba(255, 74, 222, 1)",
      // isSelected: false,
    },
    {
      id: 8,
      title: "Music",
      image: Music,
      color: "rgba(230, 30, 50, 1)",
      // isSelected: false,
    },
    {
      id: 9,
      title: "Fiction",
      image: Fiction,
      color: "rgba(108, 208, 97, 1)",
      // isSelected: false,
    },
  ];
  if (!localStorage.getItem("authenticated")) {
    return <Navigate to="/" />;
  }

  const handleSelect = (obj) => {
    //  Copy array(updatedItems)  isSelectedItem which conatains all items with thier selected state(true or false).
    //  Then find the card that is clicked and toggle the isSelectedProperty
    //  Then update the state isSelectedItem with new modified updatedItems
    //  Filter component is rendered on selectedItems(items that all are clicked are stored in this array).
    //  make a copy of updatedItems
    //  then filter all the items form isSelectedItem, which has isSelected true.
    //  then map over these items to create an array of objects with prop: genere value: selected genere.

    let name = obj.title;
    const updatedItems = [...isSelectedItem];
    const selectedItem = updatedItems.find((item) => item.id === name);
    if (selectedItem) {
      selectedItem.isSelected = !selectedItem.isSelected;
      setIsSelectedItem(updatedItems);
    }
    const displayItems = [...updatedItems];
    const selectedGenres = displayItems
      .filter((item) => item.isSelected)
      .map((item) => ({ genere: item.id }));
    setSelectedItems(selectedGenres);
  };
  const handleClose = (obj) => {
    const updatedItems = [...isSelectedItem];
    const toBeDeleted = updatedItems.find((item) => item.id === obj.genere);
    if (toBeDeleted) {
      toBeDeleted.isSelected = false;
      setIsSelectedItem(updatedItems);
      const displayItems = [...updatedItems];
      const selectedGenres = displayItems
        .filter((item) => item.isSelected)
        .map((item) => ({ genere: item.id }));
      setSelectedItems(selectedGenres);
    }
  };
  const handleNextPage = (e) => {
    if (selectedItems.length < 3) {
      setError(true);
    } else {
      localStorage.setItem("dashboard", true);
      localStorage.setItem("generes", JSON.stringify(selectedItems));
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftsection}>
          <div className={styles.logo}>
            <SuperLogo />
          </div>
          <div className={styles.caption}>
            Choose your <br /> entertainment <br /> category
          </div>
          <div className={styles.filters}>
            <div className={styles.filterContainer}>
              {selectedItems.map((obj) => (
                <Filter
                  onClick={() => handleClose(obj)}
                  // key={obj.genere}
                  title={obj.genere}
                />
              ))}
            </div>
          </div>
          {error && selectedItems.length < 3 ? (
            <div className={styles.errorContainer}>
              <span>
                <img
                  alt="errorImage"
                  src={Vectorimage}
                  style={{ width: "2vw", height: "1.5vw", marginRight: "1vw" }}
                />
              </span>
              Minimum 3 category required
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.rightsection}>
          <div className={styles.catContainer}>
            {dataSet.map((obj) => (
              <div>
                <Card
                  onClick={() => handleSelect(obj)}
                  title={obj.title}
                  key={obj.id}
                  color={obj.color}
                  image={obj.image}
                />
              </div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => handleNextPage()} type="submit">
              Next Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
