"use client";
import React, { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [modalContent, setModalContent] = useState("");

  return { isOpen, toggleModal, modalContent, setModalContent };
};

export default useModal;
