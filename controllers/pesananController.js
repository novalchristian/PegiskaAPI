import Pesanan from "../models/pesananModels.js";
import response from "../response/index.js";

const { getContent, setContent } = response;

export const getAllPesanan = async (req, res) => {
  try {
    const getAllPesanan = await Pesanan.findAll();
    setContent(200, getAllPesanan);
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const getPesanan = async (req, res) => {
  try {
    const getSinglePesanan = await Pesanan.findByPk(req.params.id);
    if (!getSinglePesanan) {
      setContent(404, getSinglePesanan);
      return res.status(404).json(getContent());
    } else {
      setContent(200, getSinglePesanan);
      return res.status(200).json(getContent());
    }
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const postPesanan = async (req, res) => {
  try {
    const newPesanan = new Pesanan(req.body);
    await newPesanan.save();
    setContent(200, "Pesanan Berhasil Ditambahkan");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

// export const putPesanan = async (req, res) => {
//   const cekId = await Pesanan.findByPk(req.params.id);
//   if (!cekId) {
//     setContent(404, cekId);
//     return res.status(404).json(getContent());
//   }

//   try {
//     const updatePesanan = await Pesanan.update(req.body, {
//       where: { id_pesanan: req.params.id },
//     });
//     await updatePesanan;
//     setContent(200, "Pesanan Berhasil Diubah!");
//     return res.status(200).json(getContent());
//   } catch (error) {
//     setContent(500, error);
//     return res.status(500).json(getContent());
//   }
// };

export const delPesanan = async (req, res) => {
  const cekId = await Pesanan.findByPk(req.params.id);
  if (!cekId) {
    setContent(404, cekId);
    return res.status(404).json(getContent());
  }

  try {
    const deletePesanan = await Pesanan.destroy({
      where: { id_pesanan: req.params.id },
    });
    await deletePesanan;
    setContent(200, "Pesanan Berhasil Dihapus!");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export default { getAllPesanan, getPesanan, postPesanan, delPesanan };
