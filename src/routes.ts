import { request, Router } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

routes.post('/settings', async function (req, res) {
  const { chat, username } = request.body
  
  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username
  })

  await settingsRepository.save(settings);

  return res.json(settings);
})

export { routes }