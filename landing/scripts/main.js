const eventTemplate = document.querySelector("#event");
const talkTemplate = document.querySelector("#talk");
const talkDetailTemplate = document.querySelector("#talkdetail");
const speakerTemplate = document.querySelector("#speaker");
const termine = document.querySelector("#termine");
const vortraege = document.querySelector("#vortraege");
const referenten = document.querySelector("#referenten");

fetch("data.json").then((res) => res.json()).then(
  (data) => populateContent(data));

const longDateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
};

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

function formatDate(dateStr, options) {
  return new Date(dateStr).toLocaleString("de-DE",
    options || dateOptions);
}

function setContent(parentNode, nodeSelector, text, id) {
  const node = parentNode.querySelector(nodeSelector);
  if (node) {
    node.textContent = text;
    if (id) {
      node.id = id;
    }
  }
}

function createLink(href, text, abs = false) {
  const element = document.createElement("a");
  element.textContent = text;
  element.href = (abs ? "" : "#") + href;
  return element;
}

function writeEvents(data) {
  let isOld = false;
  data.events.forEach((event, idx) => {
    const eventNode = eventTemplate.content.cloneNode(true);
    eventNode.querySelector("article").id = event.date;
    if ((event.date < new Date().toISOString())) {
      if (!isOld) {
        if (idx === 0) {
          termine.appendChild(
            document.createTextNode(
              " -- Leider sind momentan keine Termine geplant --"));
        }
        termine.appendChild(document.createElement("hr"));
        termine.appendChild(document.createTextNode("Vergangene Termine:"));
      }
      isOld = true;
      eventNode.querySelector("article").classList.add("old");
    } else if (event.registerLink) {
      eventNode.querySelector(".btnRegister").appendChild(
        createLink(event.registerLink, "Zur Anmeldung", true));
    }

    setContent(eventNode, ".date", formatDate(event.date, longDateOptions));
    setContent(eventNode, ".location", event.location);

    const contentNode = eventNode.querySelector(".content");

    event.talks.forEach(talk => {
      const talkNode = talkTemplate.content.cloneNode(true);
      setContent(talkNode, ".title", data.talks[talk.talk].title);

      talkNode.querySelector(".moreLink").href = "#" + talk.talk;

      const referentenNode = talkNode.querySelector(".referenten");
      talk.speakers.forEach(id => {
        const link = createLink(id, data.speakers[id].name);
        referentenNode.appendChild(link);
        referentenNode.appendChild(document.createTextNode(" "));
      });

      contentNode.appendChild(talkNode);
      contentNode.appendChild(document.createElement("hr"));
    });

    if (isOld) {
      termine.appendChild(eventNode);
    } else {
      termine.insertBefore(eventNode, termine.firstChild);
    }
  });

}

function writeTalks(data) {

  Object.keys(data.talks).forEach(id => {
    const talkNode = talkDetailTemplate.content.cloneNode(true);
    const talk = data.talks[id];
    talkNode.querySelector("article").id = id;

    setContent(talkNode, ".title", talk.title);
    setContent(talkNode, ".abstract", talk.abstract);

    const speakers = new Set();
    const dates = [];
    data.events.forEach(event => {
      event.talks.forEach(t => {
        if (t.talk === id) {
          dates.push(event.date);

          speakers.add(...t.speakers);
        }
      });
    });

    dates.forEach(d => {
      talkNode.querySelector(".termine").appendChild(
        createLink(d, formatDate(d)));
    });

    Array.from(speakers).forEach(sid => {
      talkNode.querySelector(".referenten").appendChild(
        createLink(sid, data.speakers[sid].name));
    });

    vortraege.appendChild(talkNode);
  });
}

function writeSpeakers(data) {
  Object.keys(data.speakers).map(id => {
    const speaker = data.speakers[id];
    return {
      ...speaker,
      id,
      lastName: speaker.name.split(" ")[1]
    };
  }).sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  }).forEach(speaker => {

    const speakerNode = speakerTemplate.content.cloneNode(true);
    setContent(speakerNode, ".name", speaker.name, speaker.id);
    setContent(speakerNode, ".bio", speaker.profile);

    const talksNode = speakerNode.querySelector(".vortraege");
    const talks = [];
    data.events.forEach(event => {
      event.talks.forEach(talk => {
        if (talks.find(t => t.id === talk.talk)) {
          return;
        }
        if (talk.speakers.includes(speaker.id)) {
          talks.push({
            ...data.talks[talk.talk],
            id: talk.talk
          });
        }
      });
    });
    talks.forEach(talk => {
      const link = createLink(talk.id, talk.title);
      talksNode.appendChild(link);
      talksNode.appendChild(document.createElement("br"));
    });

    referenten.appendChild(speakerNode);
  });
}

function populateContent(data) {
  writeEvents(data);
  writeTalks(data);
  writeSpeakers(data);
}