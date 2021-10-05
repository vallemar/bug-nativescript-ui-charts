export interface PVPC {
  Dia: string;
  Hora: string;
  PCB: string;
  CYM: string;
  COF2TD: string;
  PMHPCB: string;
  PMHCYM: string;
  SAHPCB: string;
  SAHCYM: string;
  FOMPCB: string;
  FOMCYM: string;
  FOSPCB: string;
  FOSCYM: string;
  INTPCB: string;
  INTCYM: string;
  PCAPPCB: string;
  PCAPCYM: string;
  TEUPCB: string;
  TEUCYM: string;
  CCVPCB: string;
  CCVCYM: string;
  EDSRPCB: string;
  EDSRCYM: string;
}

export interface ArchivesResponse {
  PVPC: PVPC[];
}
