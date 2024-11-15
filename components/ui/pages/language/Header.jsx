"use client";
import React from "react";
import Button from "../../buttons/Button";

const Header = ({ language }) => {
  return (
    <div>
      <Button
        action={() => {
          console.log(language);
        }}
      >
        Sign up in {language}
      </Button>
    </div>
  );
};

export default Header;
