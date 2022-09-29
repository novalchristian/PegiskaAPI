import Jasa from "../models/jasaModels.js";
import response from "../response/index.js";

const { getContent, setContent } = response;

export const getAllJasa = async (req, res) => {
  try {
    const getAllJasa = await Jasa.findAll();
    setContent(200, getAllJasa);
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const getJasa = async (req, res) => {
  try {
    const getSingleJasa = await Jasa.findByPk(req.params.id);
    if (!getSingleJasa) {
      setContent(404, getSingleJasa);
      return res.status(404).json(getContent());
    } else {
      setContent(200, getSingleJasa);
      return res.status(200).json(getContent());
    }
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const postJasa = async (req, res) => {
  try {
    const newJasa = new Jasa(req.body);
    await newJasa.save();
    setContent(200, "Jasa Berhasil Ditambahkan");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const putJasa = async (req, res) => {
  const cekId = await Jasa.findByPk(req.params.id);
  if (!cekId) {
    setContent(404, cekId);
    return res.status(404).json(getContent());
  }

  try {
    const updateJasa = await Jasa.update(req.body, {
      where: { id_jasa: req.params.id },
    });
    await updateJasa;
    setContent(200, "Jasa Berhasil Diubah!");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const delJasa = async (req, res) => {
  const cekId = await Jasa.findByPk(req.params.id);
  if (!cekId) {
    setContent(404, cekId);
    return res.status(404).json(getContent());
  }

  try {
    const deleteJasa = await Jasa.destroy({
      where: { id_jasa: req.params.id },
    });
    await deleteJasa;
    setContent(200, "Jasa Berhasil Dihapus!");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};
