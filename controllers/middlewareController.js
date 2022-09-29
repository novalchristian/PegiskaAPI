import sessionModel from "../models/sessionModels.js";
import response from "../response/index.js";
import moment from "moment";

const { setContent, getContent } = response;

const checkSession = async (req, res, next) => {
  const now = moment(Date.now()).tz("Asia/Jakarta").format();
  try {
    const findSession = await sessionModel.findOne({
      where: {
        session: req.headers.session,
      },
    });
    if (!findSession) {
      setContent(401, "Sesi Tidak Ditemukan!");
      return res.status(401).json(getContent());
    } else {
      if (findSession.expired_at < moment(now)) {
        setContent(401, findSession);
        return res.status(401).json(getContent());
      } else {
        req.sessionData = findSession;
        return next();
      }
    }
  } catch (error) {
    setContent(400, "Bad Request");
    return res.status(400).json(getContent());
  }
};

export default {
  checkSession,
};
