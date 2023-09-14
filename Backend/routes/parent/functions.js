// update the parent Password
router.route("/update-password").post(async (req, res) => {
    const { user_id, currentPassword, NewPassword } = req.body;
  
    const parent = await Parent.findOne({ _id: user_id });
  
    if (parent) {
      const parent_passwordMatch = await bcrypt.compare(
        currentPassword,
        parent.authentication.parent_password
      );
      if (parent_passwordMatch) {
  
        const parent_hashedPassword = await bcrypt.hash(NewPassword, 12);
  
  
        const updatePassword = {
          authentication: {
            parent_password: parent_hashedPassword,
          },
        };
  
        Parent.updateOne(
          { _id: user_id }, 
          { $set: updatePassword } 
        )
          .then((change) => {
            if (change.modifiedCount) {
              res.json({ message: "Password Reset successful..." });
            }
            // console.log(count.modifiedCount);
          })
          .catch((err) => {
            console.error("Error updating document");
          });
  
        return;
      } else {
        res.json({ message: "Password is not match..." });
        return;
      }
    } else {
      res.json({ message: "User is not found..." });
      return;
    }
  });