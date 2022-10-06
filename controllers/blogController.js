import Blog from "../models/blogModels.js";
import response from "../response/index.js";
import crypto from "crypto-js";
import { Sequelize } from "sequelize";

const { getContent, setContent } = response;

export const getAllBlog = async (req, res) => {
  try {
    const getAllBlog = await Blog.findAll();
    setContent(200, getAllBlog);
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const getBlog = async (req, res) => {
  try {
    const getBlog = await Blog.findByPk(req.params.id);
    if (!getBlog) {
      setContent(404, getBlog);
      return res.status(404).json(getContent());
    } else {
      setContent(200, getBlog);
      return res.status(200).json(getContent());
    }
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const postBlog = async (req, res) => {
  try {
    if (req.file == undefined) {
      setContent(201, "Image upload failed.");
      return res.status(201).json(getContent());
    } else {
      const newBlog = new Blog(req.body);
      newBlog.gambar = "gambar/blog/" + req.file.filename;
      await newBlog.save();
      setContent(200, "Blog Berhasil Ditambahkan");
      return res.status(200).json(getContent());
    }
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const putBlog = async (req, res) => {
  const cekId = await Blog.findByPk(req.params.id);
  if (!cekId) {
    setContent(404, cekId);
    return res.status(404).json(getContent());
  }

  try {
    if (req.file == undefined) {
      setContent(201, "Image upload failed.");
      return res.status(201).json(getContent());
    } else {
      const updateBlog = await Blog.update(req.body, {
        where: { id_blog: req.params.id },
      });
      updateBlog.gambar = "gambar/blog/" + req.file.filename;
      await updateBlog;
      setContent(200, "Blog Berhasil Diubah!");
      return res.status(200).json(getContent());
    }
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const delBlog = async (req, res) => {
  const cekId = await Blog.findByPk(req.params.id);
  if (!cekId) {
    setContent(404, cekId);
    return res.status(404).json(getContent());
  }

  try {
    const deleteBlog = await Blog.destroy({
      where: { id_blog: req.params.id },
    });
    await deleteBlog;
    setContent(200, "Blog Berhasil Dihapus!");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export default { getAllBlog, getBlog, postBlog, putBlog, delBlog };
