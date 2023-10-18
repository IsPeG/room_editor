import React, { useEffect, useState } from "react";
import IconItemElement from "../IconItemElement/IconItemElement";

import "./changeWallsFloorMenu.css";
import "react-tooltip/dist/react-tooltip.css";

import wallsData from "../../../_wallsData/data.json";
import floorsData from "../../../_floorsData/data.json";

export default function ChangeWallsFloorMenu(props) {
  const [selectingElement, setSelectingElement] = useState("");
  const [selectingElementIndex, setSelectingElementIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    props.buttonsContainerRef.current.style.display = "none";
    return () => {
      props.buttonsContainerRef.current.style.display = "block";
    };
  }, []);

  const ElementsList = (props) => {
    const [elementsData, setElementsData] = useState(null);

    useEffect(() => {
      setElementsData(selectingElement == "Walls" ? wallsData : floorsData);
    }, []);

    const test = (data, elem) => {
      console.log(data);
      if (selectedIndex != 4) {
        return elem.id == data[selectedIndex];
      } else {
        return elem.id == data;
      }
    };

    return (
      <div
        onPointerDown={(e) => e.stopPropagation()}
        className="changeWallsFloorMenuMainContainer"
      >
        <h1>{selectingElement}</h1>
        {selectingElement == "Walls" ? (
          <small>
            * Press the alt key while clicking an option <br /> to set it to all
            the walls
          </small>
        ) : null}
        <div className="changeWallsFloorMenuElementsListGrid">
          {elementsData
            ? elementsData.map((elem, index) => (
                <IconItemElement
                  selected={test(
                    selectingElement == "Floors"
                      ? props.roomDataFloor
                      : props.roomDataWalls,
                    elem
                  )}
                  backgroundImage={elem.name}
                  elementType={selectingElement.toLowerCase()}
                  elementName={formatNameFromString(elem.name)}
                  onClick={(e) =>
                    selectElementHandleClick(
                      e,
                      elem.id,
                      selectingElement.toLowerCase()
                    )
                  }
                />
              ))
            : null}
        </div>
      </div>
    );
  };

  const elementSelectorHandleClick = (index, type, slectedIndex) => {
    setSelectingElementIndex(index);
    setSelectingElement(type);
    setSelectedIndex(slectedIndex);
  };

  const selectElementHandleClick = (e, index, type) => {
    if (type == "floors") {
      props.setRoomDataFloor(index);
    } else {
      if (e.altKey) {
        props.setRoomDataWalls([index, index, index, index]);
      } else {
        let wallsArrayCopy = props.roomDataWalls;
        wallsArrayCopy[selectingElementIndex] = index;
        props.setRoomDataWalls([...wallsArrayCopy]);
      }
    }
  };

  // formats the name of the wall/floor to a one more readable
  const formatName = (index, type) => {
    let data = type == "wall" ? wallsData : floorsData;
    if (type == "wall") {
      return formatNameFromString(
        data.find((elem) => elem.id == props.roomDataWalls[index]).name
      );
    } else {
      return formatNameFromString(
        data.find((elem) => elem.id == props.roomDataFloor).name
      );
    }
  };

  const formatNameFromString = (name) => {
    const content = name
      .replace(/([-_][a-z])/g, (k) => k[1].toUpperCase())
      .replace(/([A-Z])/g, " $1")
      .trim();
    return content[0].toUpperCase() + content.slice(1);
  };

  return (
    <div
      className="changeWallsFloorMenuBackground"
      style={{ flexDirection: selectingElement ? "row" : "row-reverse" }}
      onPointerDown={props.closeSaveRoomMenu}
    >
      {selectingElement ? (
        <ElementsList
          roomDataFloor={props.roomDataFloor}
          roomDataWalls={props.roomDataWalls}
        />
      ) : null}

      <div>
        <div
          onPointerDown={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "2rem",
          }}
        >
          <button
            className="button blue"
            onClick={(e) => props.rotateCameraLeftRef.current.click()}
          >
            Rotate camera left
          </button>
          <button
            onClick={(e) => props.rotateCameraRightRef.current.click()}
            className="button blue"
          >
            Rotate camera right
          </button>
        </div>
        <div
          className="changeWallsFloorMenuMainContainer"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <h1>Change Walls & Floor</h1>
          <h2 style={{ marginBottom: "0rem" }}>Walls</h2>
          <hr
            style={{
              borderTop: "solid #271c0e .3rem",
              borderRadius: "2rem",
              width: "100%",
            }}
          />
          <div className="changeWallsFloorMenuWallsContainer">
            <IconItemElement
              selected={selectedIndex == 3}
              backgroundImage={
                wallsData.find((elem) => elem.id == props.roomDataWalls[3]).name
              }
              elementType={"walls"}
              elementName={formatName(3, "wall")}
              onClick={(e) => elementSelectorHandleClick(3, "Walls", 3)}
            />
            <IconItemElement
              selected={selectedIndex == 0}
              backgroundImage={
                wallsData.find((elem) => elem.id == props.roomDataWalls[0]).name
              }
              elementType={"walls"}
              elementName={formatName(0, "wall")}
              onClick={(e) => elementSelectorHandleClick(0, "Walls", 0)}
            />
            <IconItemElement
              selected={selectedIndex == 1}
              backgroundImage={
                wallsData.find((elem) => elem.id == props.roomDataWalls[1]).name
              }
              elementType={"walls"}
              elementName={formatName(1, "wall")}
              onClick={(e) => elementSelectorHandleClick(1, "Walls", 1)}
            />
            <IconItemElement
              selected={selectedIndex == 2}
              backgroundImage={
                wallsData.find((elem) => elem.id == props.roomDataWalls[2]).name
              }
              elementType={"walls"}
              elementName={formatName(2, "wall")}
              onClick={(e) => elementSelectorHandleClick(2, "Walls", 2)}
            />
          </div>
          <h2 style={{ marginBottom: "0rem", marginTop: "3rem" }}>Floor</h2>
          <hr
            style={{
              borderTop: "solid #271c0e .3rem",
              borderRadius: "2rem",
              width: "100%",
            }}
          />
          <div className="changeWallsFloorMenuFloorContainer">
            <IconItemElement
              selected={selectedIndex == 4}
              backgroundImage={
                floorsData.find((elem) => elem.id == props.roomDataFloor).name
              }
              elementType={"floors"}
              elementName={formatName(0, "floor")}
              onClick={(e) => elementSelectorHandleClick(0, "Floors", 4)}
            />
          </div>
        </div>

        {/* <div
          className="changeWallsFloorMenuSelectorContainer"
          style={{ display: "none" }}
          onPointerDown={(e) => e.stopPropagation()}
        ></div> */}
      </div>
    </div>
  );
}
