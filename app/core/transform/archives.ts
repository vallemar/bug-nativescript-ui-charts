import {ArchivesResponse} from "~/model/api";
import {PriceDay} from "~/model/Price";


export const transformArchive = (archive: ArchivesResponse): PriceDay[]  => {
  const priceDay: PriceDay[] = []
  archive.PVPC.forEach(parseArchive => {
    priceDay.push({
       day: parseArchive.Dia,
       hour: parseArchive.Hora,
       price: parseFloat(parseArchive.PCB)
    })
  })
  return priceDay;
}
