var aiPersonalitySelectorLoaded;

if (!aiPersonalitySelectorLoaded) {
  aiPersonalitySelectorLoaded = true;

  try {
    $(".form-control-personality")
      .parent()
      .append(
        loadHtml(
          "coui://ui/mods/com.pa.quitch.aiPersonalitySelector/personality_selector.html"
        )
      );
    locUpdateDocument();
  } catch (e) {
    console.error(e);
    console.error(JSON.stringify(e));
  }
}
