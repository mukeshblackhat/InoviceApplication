import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import ReactModal from 'react-modal'
import MainBody from "./MainBody";
import Invoice from "../../Invoice";
import { withTheme } from "styled-components";

const Mainpage = ({ currentTab }) => {
  const [data, setData] = useState({});
  const [modalState, setModalState] = useState({status: false, current: null});
  
  const overlayCloseBefore = () => {
    setModalState({...modalState, status: false});
  }
  const overlayCloseAfter = () => {
    setModalState({...modalState, current: null});
  }
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:'50vw',
      height:'95vh'
    },
    overlay: {
      "background": "rgba(0, 0, 0, 0.6)",
      "backdrop-filter": "blur(4px)",
    },
  };
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://rscdev.taxadda.com/api/invoice/list`
        );
        if (response.status !== 200) {
          throw response.statusText;
        }
        const result = response.data;
        return result;
      } catch (e) {
        console.log(e);
      }
    };
    data().then((d) => {
      switch (currentTab) {
        case 0:
          const data = d.invoices;
          setData(data)
          break;
        case 1:
          const data1 = d.invoices;
          setData(data1)
          break;
        case 2:
          const data2 = d.invoices.filter(
            (invoice) => invoice.status.toLowerCase().trim() === "outstanding"
          );
          setData(data2);
          break;
        case 3:
          const data3 = d.invoices.filter(
            (invoice) => invoice.status.toLowerCase().trim() === "late"
          );
          setData(data3);
          break;
        case 4:
          const data4 = d.invoices.filter(
            (invoice) => invoice.status.toLowerCase().trim() === "paid"
          );
          setData(data4);
          break;
        default:
          break;
      }
    });
  }, [currentTab]);
  return (
    <Main>
      <table>
        <thead>
          <tr>
            <td>Customer</td>
            <td>Invoice#</td>
            <td>Amount</td>
            <td>Period</td>
            <td>Due</td>
            <td>Created</td>
            <td>Status</td>
          </tr>
        </thead>
        {Object.keys(data).length !== 0 && <MainBody data={data} setModalState={setModalState}/>}
      </table>
      <ReactModal 
           onRequestClose={overlayCloseBefore}
           onAfterClose={overlayCloseAfter}
           isOpen={modalState.status}
           contentLabel="Current Invoice"
           style={customStyles}
        >
          <Invoice invoice={modalState.current}/>
      </ReactModal>
      {Object.keys(data).length === 0 && <h1>Loading...</h1>}
    </Main>
  );
};

const Main = styled.div`
  width: 80vw;
  height: 100%;
  overflow-x: none;
  overflow-y: auto;
  margin: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
  }

  & table {
    width: 100%;
    color: #5f6266;
    font-weight: bold;
    & tr {
      height: 2em;
      border-bottom: 1px solid gray;
    }
  }
`;
export default Mainpage;
