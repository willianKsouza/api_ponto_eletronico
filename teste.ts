//  const response = await axios({
//    method: "GET",
//    url: uploadFolder+'/cachoeira.jpeg',
//    responseType: "arraybuffer",
//  });

//  const buffer = Buffer.from(response.data, "binary");

//  const { data, error } = await supabaseStorage.storage
//    .from("avatars")
//    .upload(`${req.file?.filename}`, buffer);

//  if (error) {
//       return res.json({
//         "erro ao enviar:": error,
//       });
//  } else {
//    return res.json({
//      "Imagem enviada com sucesso para o Supabase:":data
//    });
//  }

if (req.file) {
  const imgBuffer = Buffer.from(JSON.stringify(req.file));
  const imgBlob = Buffer.from()
  console.log(imgBlob);

  const { data, error } = await supabaseStorage.storage
    .from("avatars")
    .upload(`${req.file.filename}`, imgBlob);

  if (data) {
    console.log(data);

    return res.json('sucesso');
  } else {
    console.log('deu erro' + error);
     return res.json(error);
  }

} else {
  throw new apiError('erro', 500);
}
