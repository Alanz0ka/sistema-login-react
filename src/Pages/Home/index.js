// Home.js
import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/index';
import ProductsTable from '../../Components/ItensTable/index'; 
import ItensForm from '../../Components/ItensForm/index';
import styled from 'styled-components';
import api from '../../Services/api';

const Container = styled.div`
  width: 65%;
  border-radius: 8px;
  background-color: #201d1d;
  padding: 50px;
  margin: 50px auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null)

  const handleDelete = async (id) => {
    try {
      await api.delete(`/itens/delete/${id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      setItems(items.filter((item) => item.id !== id)); 
      alert("Item foi excluido com sucesso!")
    } catch (error) {
      console.error(error);
    }
  }

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  const fetchItems = async () => {
    try {
      const response = await api.get(`/itens/${localStorage.getItem('id')}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  
  return (
    <div>
      <Navbar />
      <Container>
      <ItensForm item={selectedItem} fetchItems={fetchItems}/>
      <ProductsTable items={items} handleDelete={handleDelete} onRowClick={handleRowClick} />
      </Container>
    </div>
  );
};

export default Home;
