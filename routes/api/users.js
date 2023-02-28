const express = require("express");
const { authToken,upload, ctrlWrapper,validation } = require("../../middlewares");
const {verifyEmailJoiSchema} = require("../../models/user");
const { users: ctrl } = require("../../controllers");
const router = express.Router();


router.get("/current", authToken, ctrlWrapper(ctrl.getCurrent));
router.patch("/avatars",authToken,upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));
router.get('verify/:verificationToken',ctrlWrapper(ctrl.verifyEmail))
router.post("verify",validation(verifyEmailJoiSchema),ctrlWrapper(ctrl.resendVerifyEmail))
module.exports = router;
