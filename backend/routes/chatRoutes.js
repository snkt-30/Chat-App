const express = require("express");
const protect = require("../middleware/authMiddleware");
const { accessChat, fetchChats } = require("../controllers/chatControllers");
// const fetchChats=require("../controllers/chatControllers")
const router = express();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
// router.route('/group').post(protect,createGroupChat);
// router.route('/rename').put(protect,renameGroup);
// router.route('/groupremove').delete(protect,removeFromGroup);
// router.route('/groupadd').put(protect,addToGroup);

module.exports = router;