/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: badware

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".code-block",".appua-reimage-top,\n.info.box",".download_button_info_texts,\n.js-download_button_additional_links,\n.sidebar_download_inner,\ndiv.attention-button-box-green",".primary_download","b:has(a[target^=\"reimage\"])",".automatic_removal_list,\n.automatic_removal_list_w > .ar_block_description,\n.js-download_button_offer,\n.quick-download-button-placeholder,\n.quick-download-button-text,\n.sidebar_download_inner > :not(.voting-box):not(.colorbg-grey),\n.ui-content > .win","#gray_de,\n#solution_v2_de,\ndiv[style^=\"border:2px\"]","meta[http-equiv=\"refresh\"],\nscript[src^=\"data:text/javascript;base64,\"]","[onclick*=\"open\"]","center > [class*=\"buttonPress-\"]","div[class^=\"code-block code-block-\"]",".getox","center > a[target=\"_blank\"][rel=\"nofollow noreferrer noopener\"]","div[style=\"float: none; margin:10px 0 10px 0; text-align:center;\"]","[id^=\"haxno-\"]","a[rel=\"nofollow noreferrer noopener\"][target=\"_blank\"]",".cente-1",".ads-btns","[class*=\"buttonPress-\"]","center > a","center > button","[href^=\"http://slugmefilehos.xyz/\"]","center#yangchen > iframe#external-frame[src=\"https://im136.mom/\"]:not([class])","html.w-mod-js:not(.wf-active) > body:not([class]):not([id]) > a[class=\"w-inline-block\"][href^=\"http\"]","#ad-gs-05"];

const hostnamesMap = new Map([["windowsreport.com",0],["appuals.com",1],["pcseguro.es",[2,3]],["sauguspc.lt",[2,3]],["sichernpc.de",[2,3]],["ugetfix.com",[2,3]],["wyleczpc.pl",[2,3]],["2-spyware.com",[3,5]],["novirus.uk",[3,5]],["faravirus.ro",[3,5]],["uirusu.jp",[3,5]],["virusi.hr",[3,5]],["wubingdu.cn",[3,5]],["avirus.hu",[3,5]],["ioys.gr",[3,5]],["odstranitvirus.cz",[3,5]],["tanpavirus.web.id",[3,5]],["utanvirus.se",[3,5]],["virukset.fi",[3,5]],["losvirus.es",[3,5]],["virusler.info.tr",[3,5]],["semvirus.pt",[3,5]],["lesvirus.fr",[3,5]],["senzavirus.it",[3,5]],["dieviren.de",[3,5]],["viruset.no",[3,5]],["usunwirusa.pl",[3,5]],["zondervirus.nl",[3,5]],["bedynet.ru",[3,5]],["virusai.lt",[3,5]],["virusi.bg",[3,5]],["viirused.ee",[3,5]],["udenvirus.dk",[3,5]],["majorgeeks.com",4],["howtoremove.guide",6],["tech4yougadgets.com",7],["goharpc.com",[8,10]],["pccrackbox.com",8],["cracklabel.com",[8,9]],["pcwarezbox.com",[8,9]],["10crack.com",8],["crackproductkey.com",[8,9]],["crackpcsoft.net",[8,10]],["crackwinz.com",[8,10]],["genuineactivator.com",8],["topcracked.com",[8,10]],["fullcrackedpc.com",8],["idmfullcrack.info",8],["idmpatched.com",8],["productkeyfree.org",[8,12]],["patchcracks.com",[8,9]],["cracksole.com",8],["allsoftwarekeys.com",8],["softwar2crack.com",8],["productkeyforfree.com",[8,12]],["wazusoft.com",[8,12]],["rootscrack.com",[8,12]],["activators4windows.com",[8,10]],["procrackhere.com",8],["proproductkey.com",[8,10]],["freelicensekey.org",8],["pcsoftz.net",8],["freecrackdownload.com",[8,10]],["f4file.com",[8,10]],["serialkey360.com",8],["zuketcreation.net",[8,16]],["filedownloads.store",8],["serialkey89.com",9],["installcracks.com",9],["crackserialkey.co",9],["maliksofts.com",9],["crackpropc.com",[9,11]],["ayeshapc.com",9],["crackhomes.com",9],["crackspro.co",[9,11]],["crackknow.com",[9,11]],["4howcrack.com",9],["trycracksoftware.com",9],["getprocrack.co",9],["activationkeys.co",9],["organiccrack.com",9],["softwarance.com",9],["procrackkey.co",9],["download4mac.com",9],["freeactivationkeys.org",9],["explorecrack.com",9],["okproductkey.com",9],["downloadpc.net",9],["up4pc.com",9],["hitproversion.com",9],["cracktube.net",9],["abbaspc.net",9],["crackdownload.org",9],["crackdownload.me",9],["corecrack.com",9],["windowsactivator.info",9],["keygenstore.com",9],["procrackpc.co",9],["getmacos.org",9],["latestproductkey.co",9],["shanpc.com",9],["crackpckey.com",9],["torrentfilefree.com",[9,12]],["idmfullversion.com",9],["wareskey.com",9],["crackbell.com",9],["newproductkey.com",[9,10]],["osproductkey.com",9],["serialkeysfree.org",[9,12]],["autocracking.com",[9,12]],["crackzoom.com",9],["greencracks.com",[9,10]],["profullversion.com",[9,12]],["crackswall.com",[9,12]],["rootcracks.org",[9,10]],["licensekeys.org",9],["softserialkey.com",9],["free4pc.org",9],["productkeys.org",9],["crackedfine.com",9],["idmcrackeys.com",9],["crackedhere.com",9],["licensekeysfree.org",9],["trycracksetup.com",9],["crackedsoft.org",9],["assadpc.com",[9,10]],["thecrackbox.com",[9,12]],["keystool.com",[9,10]],["crackedpcs.com",9],["cracksmad.com",9],["licensekeyup.com",9],["chcracked.com",9],["finalcracked.com",9],["activatorpros.com",9],["crackedmod.com",9],["whitecracked.com",9],["cracksoon.com",9],["boxcracked.com",9],["activationkey.org",9],["serialkeypatch.org",9],["crackedsoftpc.com",9],["proapkcrack.com",9],["softscracked.com",9],["freeappstorepc.com",9],["reallpccrack.com",9],["crackfullkey.net",9],["hmzapc.com",9],["zcracked.com",9],["usecracked.com",9],["crackedversion.com",9],["aryancrack.com",9],["piratespc.net",9],["reallcrack.com",9],["fultech.org",9],["crackpro.org",9],["cracksray.com",9],["cracksmat.com",[9,10]],["crackxpoint.com",9],["startcrack.co",9],["crackbros.com",[9,10]],["pcfullversion.com",[9,10]],["sjcrack.com",9],["repack-games.com",[9,10]],["bypassapp.com",9],["crackfury.com",9],["9to5crack.com",9],["warezcrack.net",10],["freeprosoftz.com",10],["vcracks.com",10],["crackthere.com",10],["keygenfile.net",10],["scracked.com",10],["cyberspc.com",10],["softzcrack.com",10],["crackintopc.com",10],["zslicensekey.com",10],["procrackpc.com",10],["crackshere.com",10],["crackdj.com",10],["cracktopc.com",10],["serialsofts.com",10],["prosoftlink.com",10],["zscracked.com",10],["crackvip.com",10],["windowcrack.com",10],["softsnew.com",10],["licensecrack.net",10],["vstpatch.net",10],["newcrack.info",10],["topkeygen.com",[10,12]],["vsthomes.com",10],["vstserial.com",10],["procrackerz.com",[10,11]],["pcfullcrack.org",10],["keygenpc.com",10],["bicfic.com",10],["ikcrack.com",10],["downloadcracker.com",10],["karancrack.com",10],["piratesfile.com",[10,12]],["activatorwin.com",10],["starcrack.net",10],["crackproduct.com",10],["dgkcrack.com",10],["crackglobal.com",10],["crackcan.com",10],["keygendownloads.com",10],["crackpatched.com",10],["windowsactivators.org",10],["serialsoft.org",10],["crackit.org",10],["productscrack.com",10],["crackurl.info",10],["crackroot.net",10],["crackmak.com",10],["seeratpc.com",10],["crackmix.com",10],["piratepc.me",10],["letcracks.com",[10,12]],["latestcracked.com",10],["fullversionforever.com",10],["vlsoft.net",10],["crackeado.net",10],["fileoye.com",10],["excrack.com",10],["mahcrack.com",10],["get4pcs.com",10],["keygenwin.com",10],["mycrackfree.com",10],["crackfullpro.com",10],["crackkey4u.com",10],["fileserialkey.com",10],["cracksdat.com",10],["crackgrid.com",10],["licensekeysfree.com",10],["crackkeymac.com",10],["freecrack4u.com",10],["getintomac.net",10],["crackreview.com",10],["activatorskey.com",10],["kuyhaa.cc",10],["cracktel.com",10],["up4crack.com",10],["crackcut.com",10],["game-repack.site",10],["dodi-repacks.download",10],["yasir-252.net",10],["getpcsofts.net",10],["procracks.net",10],["zeemalcrack.com",[10,11]],["macfiles.org",10],["softzspot.com",10],["crackkits.com",11],["crackwatch.org",11],["origincrack.com",[11,20]],["crackhub.org",11],["crackrules.com",11],["haxmac.cc",11],["cracka2zsoft.com",[11,19]],["clevercracks.com",11],["onhax.in",[11,18]],["haxpc.net",11],["win-crack.com",12],["kalicrack.com",12],["sadeempc.com",12],["thepiratecity.co",12],["torrentmac.net",12],["ryuugames.com",12],["pesktop.com",12],["proappcrack.com",12],["zgamespc.com",12],["crack11.com",12],["gvnvh.net",12],["cracksoftwaress.net",13],["haxnode.net",14],["romsdl.net",15],["xcloud.mom",17],["torrdroidforpc.com",21],["app",22],["webflow.io",23],["uploadfox.net",24]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/