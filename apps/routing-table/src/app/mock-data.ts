type ServerStatus = 'OPEN' | 'OFF' | 'FULL OPS'

type Server = {
  id: string
  label: string
  status: ServerStatus
}

type Connection = {
  from: string // source Server id
  to: string   // target Server id
  active: boolean
}

export const rowServers: Server[] = [
  { id: 'ownship', label: 'OwnShip', status: 'OPEN' },
  { id: 'omni_server', label: 'Omni Server', status: 'OPEN' },
  { id: 'vmf', label: 'VMF', status: 'OFF' },
  { id: 'jreapc_dbs2', label: 'JREAPC DBS2', status: 'FULL OPS' },
  { id: 'gps_nmfa', label: 'GPS NMFA', status: 'OFF' },
  { id: 'tak_server', label: 'TAK Server', status: 'OPEN' },
  { id: 'jreapc_dbs2', label: 'JREAPC DBS2', status: 'OFF' },
  { id: 'vmf_dbs2', label: 'VMF DBS2', status: 'OFF' },
  { id: 'jre_apc', label: 'JRE APC', status: 'OPEN' },
  { id: 'ownship1', label: 'OwnShip1', status: 'OPEN' },
  { id: 'omni_server1', label: 'Omni Server1', status: 'OPEN' },
  { id: 'vmf', label: 'VMF', status: 'OFF' },
  { id: 'jreapc_dbs21', label: 'JREAPC DBS21', status: 'FULL OPS' },
  { id: 'gps_nmfa1', label: 'GPS NMFA1', status: 'OFF' },
  { id: 'tak_server1', label: 'TAK Server1', status: 'OPEN' },
  { id: 'jreapc_dbs21', label: 'JREAPC DBS21', status: 'OFF' },
  { id: 'vmf_dbs21', label: 'VMF DBS21', status: 'OFF' },
  { id: 'jre_apc1', label: 'JRE APC1', status: 'OPEN' },
];

export const colServers: Server[] = [
  { id: 'ownship', label: 'OwnShip', status: 'OPEN' },
  { id: 'omni_server', label: 'Omni Server', status: 'OPEN' },
  { id: 'vmf', label: 'VMF', status: 'OFF' },
  { id: 'jre_apc', label: 'JRE APC', status: 'OPEN' },
  { id: 'jreap_a', label: 'JREAP A', status: 'OFF' },
  { id: 'tak_server', label: 'TAK Server', status: 'OFF' },
  { id: 'jreapc_dbs2', label: 'JREAPC DBS2', status: 'FULL OPS' },
  { id: 'vmf_dbs2', label: 'VMF DBS2', status: 'OFF' },
  { id: 'record', label: 'Record', status: 'OFF' },
  { id: 'gps_nmfa', label: 'GPS NMFA', status: 'OFF' },
  { id: 'gulfcoast', label: 'GulfCoast', status: 'OFF' },
  { id: 'ownship1', label: 'OwnShip1', status: 'OPEN' },
  { id: 'omni_server1', label: 'Omni Server1', status: 'OPEN' },
  { id: 'vmf1', label: 'VMF1', status: 'OFF' },
  { id: 'jre_apc1', label: 'JRE APC1', status: 'OPEN' },
  { id: 'jreap_a1', label: 'JREAP A1', status: 'OFF' },
  { id: 'tak_server1', label: 'TAK Server1', status: 'OFF' },
  { id: 'jreapc_dbs21', label: 'JREAPC DBS21', status: 'FULL OPS' },
  { id: 'vmf_dbs21', label: 'VMF DBS21', status: 'OFF' },
  { id: 'record1', label: 'Record1', status: 'OFF' },
  { id: 'gps_nmfa1', label: 'GPS NMFA1', status: 'OFF' },
  { id: 'gulfcoast1', label: 'GulfCoast1', status: 'OFF' },
  { id: 'ownship2', label: 'OwnShip2', status: 'OPEN' },
  { id: 'omni_server2', label: 'Omni Server2', status: 'OPEN' },
  { id: 'vmf2', label: 'VMF2', status: 'OFF' },
  { id: 'jre_apc2', label: 'JRE APC2', status: 'OPEN' },
  { id: 'jreap_a2', label: 'JREAP A2', status: 'OFF' },
  { id: 'tak_server2', label: 'TAK Server2', status: 'OFF' },
  { id: 'jreapc_dbs22', label: 'JREAPC DBS22', status: 'FULL OPS' },
  { id: 'vmf_dbs22', label: 'VMF DBS22', status: 'OFF' },
  { id: 'record2', label: 'Record2', status: 'OFF' },
  { id: 'gps_nmfa2', label: 'GPS NMFA2', status: 'OFF' },
  { id: 'gulfcoast2', label: 'GulfCoast2', status: 'OFF' },
]

export const connections: Connection[] = [
  { from: 'ownship', to: 'omni_server', active: false },
  { from: 'ownship', to: 'vmf', active: true },
  { from: 'ownship', to: 'tak_server', active: false },
  { from: 'omni_server', to: 'omni_server', active: true },
  { from: 'omni_server', to: 'jre_apc', active: true },
  { from: 'jreapc_dbs2', to: 'jreapc_dbs2', active: true },
  { from: 'gps_nmfa', to: 'jre_apc', active: true },
  { from: 'gps_nmfa', to: 'vmf', active: false },
  { from: 'tak_server', to: 'tak_server', active: true },
  { from: 'tak_server', to: 'gps_nmfa', active: true },
  { from: 'vmf_dbs2', to: 'vmf_dbs2', active: true },
]
