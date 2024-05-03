import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../Services/api';
import Input from '../../Components/input/index';
import plusIcon from '../../assets/icons/plus.svg';
import pencilIcon from '../../assets/icons/pencil.svg';

const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: light;
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0px 30px;
  border-bottom: 1px solid #ECEFF1;
  padding-bottom: 20px;
  margin-bottom: 20px;

  p {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  a{
    color: white;
    font-size: 14px;
  }
`

const SubmitButton = styled.button`
  color: #fff;
  font-size: 20px;
  border: 30px;
  background-color: #00E676;
  border-radius: 8px;
  min-width: 50px;
  min-height: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color: #00C853;
    color: green;
  }
`

const Icon = styled.img`
  width: 25px;
`

const ItensForm = ({ item, fetchItems }) => {
    const [form, setForm] = useState(item || { nome: '', valor: '', quantidade: '' });

    useEffect(() => {
        setForm(item || { nome: '', valor: '', quantidade: '' });
      }, [item]);

  const addItem = async () => {
    try {
      await api.post('itens/cadastro', form, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchItems();
      alert("Item foi cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = async () => {
    try {
      await api.put(`itens/atualizar/${item}`, form, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchItems();
      alert("Item foi editado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (item) {
        await editItem();
      } else {
        await addItem();
      }
      setForm({ nome: '', valor: '', quantidade: '' });
      item = null;
      fetchItems()
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Title>Adicionar Item</Title>
      <Form>
      <Input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange}/>
      <Input type="number" name="valor" placeholder="Preço" value={form.valor} onChange={handleChange}/>
      <Input type="number" name="quantidade" placeholder="Estoque" value={form.quantidade} onChange={handleChange}/>
        <SubmitButton onClick={(e) => handleSubmit(e)}>
          <Icon src={item ? pencilIcon : plusIcon }/>
        </SubmitButton>
      </Form>   
    </>
  );
};

export default ItensForm;
