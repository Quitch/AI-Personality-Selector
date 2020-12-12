var aiPersonalitySelectorLoaded;

function aiPersonalitySelector() {
  if (aiPersonalitySelectorLoaded) {
    return;
  }

  api.debug.log("Loading AI Personality Selector");

  aiPersonalitySelectorLoaded = true;

  $(".form-control-personality")
    .parent()
    .append(
      loadHtml(
        "coui://ui/mods/com.pa.quitch.aiPersonalitySelector/personality_selector.html"
      )
    );
  locUpdateDocument();
}

try {
  aiPersonalitySelector();
} catch (e) {
  console.error(e);
}
