import User from "../models/userModel.js";
import sessionModel from "../models/sessionModels.js";
import moment from "moment";
import crypto from "crypto-js";

const auth = async (req, res) => {
  try {
    const findUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (!findUser) {
      return res.status(404).json("User Tidak Ditemukan !!!");
    } else {
      const inputPassword = crypto.AES.decrypt(
        findUser.password,
        process.env.AES_KEY
      ).toString(crypto.enc.Utf8);

      // console.log(inputPassword);
      if (inputPassword !== req.body.password) {
        return res.status(404).json("Password salah");
      } else {
        const sessionHash = crypto
          .SHA256(
            process.env.SESSION_WORD +
              findUser.nama +
              findUser.email +
              Date.now()
          )
          .toString();
        const now = moment(Date.now()).tz("Asia/Jakarta").format();
        const sessionExpiry = moment(now).add(3, "M").tz("Asia/Jakarta");
        const diff = sessionExpiry.diff(now) / 1000;

        try {
          const findSession = await sessionModel.findOrCreate({
            where: { id_user: findUser.id_user },
            defaults: {
              id_user: findUser.id_user,
              session: sessionHash,
              expired_value: diff,
              expired_at: moment(sessionExpiry).tz("Asia/Jakarta").format(),
            },
          });

          if (findSession[1] === false) {
            try {
              await sessionModel.update(
                {
                  session: sessionHash,
                  expire_value: diff,
                  expired_at: moment(sessionExpiry).tz("Asia/Jakarta").format(),
                },
                {
                  where: { id_user: findUser.id_user },
                }
              );
            } catch (error) {
              console.log(error);
              return res.status(500).json("Internal Server Error");
            }
          }

          return res.status(200).json({
            session: sessionHash,
            id_user: findUser.id_user,
          });
        } catch (error) {
          return res.status(500).json("Internal Server Error");
        }
      }
    }
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};

export default { auth };
