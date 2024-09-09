import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switcher from "../components/switcher";
import { useTranslation } from "react-i18next";

// images
import logo from "../assets/logo 1.png";
import logo2 from "../assets/logo 2.png";

const Layout = () => {
  const [age, setAge] = useState("");
  const { i18n, t } = useTranslation();

  const handleChange = (event) => {
    setAge(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <div className="dark:bg-[black] w-[100%] h-[80px] flex flex-wrap justify-evenly items-center">
        <div className="flex gap-[10px] items-center">
          <img className="dark:hidden" src={logo} alt="" />
          <img className="light:hidden" src={logo2} alt="" />
          <h1 className="dark:text-[white] text-[20px] text-[black] font-[800]">
            Personal
          </h1>
        </div>

        <div className="sm:gap-[20] md:gap-[50px] lg:gap-[80px] xl:gap-[100px] dark:text-[white] flex items-center gap-[20px]">
          <Link to={"/"}>{t("Home")}</Link>
          <Link to={"table"}>{t("Table")}</Link>
        </div>

        <div className="flex items-center gap-[30px]">
          <Box sx={{ minWidth: 120 }}>
            <FormControl size="small" sx={{ width: "100px" }}>
              <InputLabel id="demo-simple-select-label">Translation</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                sx={{ background: "white", borderRadius: "5px" }}
                label="Translation"
              >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"ru"}>Русский</MenuItem>
                <MenuItem value={"tj"}>Точики</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Switcher />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
