import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddProduct from "../components/FormAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (user && user.role !== "admin" && user.role !== "staff") {
      navigate("/dashboard");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormAddProduct />
    </Layout>
  );
};

export default AddProduct;
